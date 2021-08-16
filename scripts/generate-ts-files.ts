import * as path from 'path';
import { CHART_ID_OPTIONS, ChartID } from '@antv/knowledge';
import * as fse from 'fs-extra';
import * as inquirer from 'inquirer';
import { SVG_DIR, CHART_TS_DIR, THUMBNAILS_TS_PATH } from './consts';
import { ensureAndResetDir, idToName, pureFileName } from './utils';

interface ChartInfo {
  chartId: string;
  chartName: string;
  svgCode: string;
}

interface Params {
  chartTsDir: string;
  thumbnailsTsPath: string;
  svgDir: string;
  strict: boolean;
}

/**
 * Template of a chart file.
 *
 * chartId.toUpperCase(): variable name must be in lowerCamelCase, PascalCase or UPPER_CASE
 */
const fileTemplate = ({ chartId, chartName, svgCode }: ChartInfo) => `// ${chartId}

import { ChartImageInfo } from '../../interfaces';

const ${chartId.toUpperCase()}: ChartImageInfo = {
  id: '${chartId}',
  name: '${chartName}',
  svgCode:
    '${svgCode}',
};

export default ${chartId.toUpperCase()};
`;

/**
 * Template of `thumbnails.ts` file
 *
 * @param chartFiles
 */
const thumbnailsTemplate = (chartFiles: string[]) => `// generated file thumbnails.ts

import { ChartImageInfo } from '../interfaces';

${chartFiles.map((file: string) => `import ${file.toUpperCase()} from './charts/${file}';`).join('\n')}

const Thumbnails: Partial<Record<string, ChartImageInfo>> = {
${chartFiles.map((file: string) => `  ${file}: ${file.toUpperCase()}`).join(',\n')},
};

export default Thumbnails;

export {
${chartFiles.map((file: string) => `  ${file.toUpperCase()}`).join(',\n')},
};
`;

/**
 * Extract svg images, optimize svg codes and then generate corresponding ts file.
 *
 * @param Params.chartTsDir directory for exporting ts files for charts.
 * @param Params.thumbnailsTsPath path for exporting thumbnails.ts.
 * @param Params.svgDir directory of svg files.
 * @param Params.strict whether allow chart ids outside AVA CKB. Default false.
 */
const generateTsFiles = async ({ chartTsDir, thumbnailsTsPath, svgDir, strict }: Params) => {
  // get all charts

  const validFiles: string[] = [];

  const questions: inquirer.Question[] = [];
  const notices: string[] = [];

  const svgDirExists = await fse.pathExists(svgDir);
  if (!svgDirExists) return;

  const svgFiles = await fse.readdir(svgDir);
  if (!svgFiles || svgFiles.length === 0) return;

  svgFiles.forEach((file) => {
    const fileExtName = path.extname(file);
    const fileName = path.basename(file, fileExtName);

    if (fileExtName !== '.svg') {
      notices.push(`WARN: File ${file} is not with .svg and it has been ignored.`);
    } else if (CHART_ID_OPTIONS.includes(fileName as ChartID)) {
      // `file` should be a ChartID
      validFiles.push(file);
    } else {
      questions.push({
        default: false,
        message: `The name of file ${file} is not a ChartID. Still want to add it?`,
        name: file,
        type: 'confirm',
      });
    }
  });

  notices.forEach((notice) => console.log(notice));

  if (strict) {
    questions.forEach(({ name }) => console.log(`The name of file ${name} is not a ChartID. It has been ignored.`));
  } else {
    await inquirer.prompt(questions).then(async (answers) => {
      await Promise.all(
        Object.keys(answers).map(async (file) => {
          if (answers[file]) {
            validFiles.push(file);
          }
        })
      );
    });
  }

  // clear charts
  await ensureAndResetDir(chartTsDir);

  // generate ts files
  await Promise.all(
    validFiles.map(async (svgFile) => {
      const fileExtName = path.extname(svgFile);
      const fileName = path.basename(svgFile, fileExtName);
      const svgFilePath = path.join(process.cwd(), svgDir, svgFile);
      const svgCode = await fse.readFile(svgFilePath as string, { encoding: 'utf8' });

      const tsFilePath = path.join(process.cwd(), chartTsDir, `${fileName}.ts`);

      await fse.writeFile(tsFilePath, fileTemplate({ chartId: fileName, chartName: idToName(fileName), svgCode }));
    })
  );

  // update thumbnails.ts
  await fse.writeFile(thumbnailsTsPath, thumbnailsTemplate(validFiles.map((file) => pureFileName(file)).sort()));
};

// exe script
(async () => {
  const myArgs = process.argv.slice(2);
  const isStrictMode = myArgs.length > 0 && myArgs[0] === 'strict';

  await generateTsFiles({
    chartTsDir: CHART_TS_DIR,
    thumbnailsTsPath: THUMBNAILS_TS_PATH,
    svgDir: SVG_DIR,
    strict: isStrictMode,
  });

  console.log('extract svg done!');
})();
