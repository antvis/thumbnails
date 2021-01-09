import * as fse from 'fs-extra';
import * as path from 'path';
import { GITHUB_IMAGE_PATH_PREFIX, SVG_PATH } from './utils';

const START_SIGN = '<!-- PREVIEW START -->';
const END_SIGN = '<!-- PREVIEW END -->';

const genPreviewHTML = (fileNames: string[]) => `
<div style="display: flex; flex-flow: row wrap;">
${fileNames
  .map((file: string) => `  <img src="${GITHUB_IMAGE_PATH_PREFIX}${file}" width="180" height="200">`)
  .join('\n')}
</div>
`;

/**
 * Update all svg ChartSymbols' thumbnails into README.
 */
const updateReadmePreview = async () => {
  const README = 'README.md';
  const readmePath = path.join(process.cwd(), README);

  const readmeContent = await fse.readFile(readmePath, { encoding: 'utf8' });

  const lines = readmeContent.split('\n');

  const files = await fse.readdir(SVG_PATH);
  const previewContent = genPreviewHTML(files);
  const previewLines = previewContent.split('\n');

  let startSignIndex;
  let endSignIndex;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === START_SIGN) {
      startSignIndex = i;
    }
    if (lines[i] === END_SIGN) {
      endSignIndex = i;
      break;
    }
  }

  if (startSignIndex && endSignIndex) {
    lines.splice(startSignIndex + 1, endSignIndex - startSignIndex - 1, ...previewLines);

    const newReadmeContent = lines.join('\n');
    await fse.writeFile(readmePath, newReadmeContent);
  }
};

(async () => {
  await updateReadmePreview();
})();
