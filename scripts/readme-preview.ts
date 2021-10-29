import * as path from 'path';
import { CHART_ID_OPTIONS, ChartID } from '@antv/knowledge';
import * as fse from 'fs-extra';
import { GITHUB_IMAGE_PATH_PREFIX, SVG_DIR } from './consts';

const START_SIGN = '<!-- PREVIEW START -->';
const END_SIGN = '<!-- PREVIEW END -->';

/**
 * Template for images in README.
 */
const genPreviewHTML = (fileNames: string[]) => `
<div style="display: flex; flex-flow: row wrap;">
${fileNames
  .map((file: string) => `  <img src="${GITHUB_IMAGE_PATH_PREFIX}${file}" width="200" height="200">`)
  .join('\n')}
</div>
`;

/**
 * Update all svg thumbnails in README.
 */
const updateReadmePreview = async () => {
  const README = 'README.md';
  const readmePath = path.join(process.cwd(), README);

  const readmeContent = await fse.readFile(readmePath, { encoding: 'utf8' });

  const lines = readmeContent.split('\n');

  const files = await fse.readdir(SVG_DIR);
  const validFiles = files.filter((f) => CHART_ID_OPTIONS.includes(path.basename(f, path.extname(f)) as ChartID));
  const previewContent = genPreviewHTML(validFiles);
  const previewLines = previewContent.split('\n');

  let startSignIndex: number;
  let endSignIndex: number;
  for (let i = 0; i < lines.length; i += 1) {
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
