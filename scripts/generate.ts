import { CHART_ID_OPTIONS, ChartID } from '@antv/knowledge';
import * as inquirer from 'inquirer';
import * as path from 'path';
import * as fse from 'fs-extra';
import { CODE_PATH, DEFAULT_HTMLPATH } from './consts';

interface Params {
  htmlPath: string;
  strict?: boolean;
}

/**
 * Generate a HTML page that contains all chart doms by G2Plot.
 *
 * @param Params.htmlPath path of the generated html file.
 * @param Params.strict whether allow chart ids outside AVA CKB. Default false.
 */
export const generateSampleHTML = async ({ strict = false, htmlPath }: Params) => {
  const validFiles: string[] = [];
  const chartCodeMap: Record<string, string> = {};

  const questions: inquirer.Question[] = [];
  const notices: string[] = [];

  // read js files of chart samples

  const chartCodeFiles = await fse.readdir(CODE_PATH);

  chartCodeFiles.forEach(file => {
    const fileExtName = path.extname(file);
    const fileName = path.basename(file, fileExtName);

    if (fileExtName !== '.js') {
      notices.push(`WARN: File ${file} is not with .js and it has been ignored.`);
    } else {
      // The name of `file` should be a ChartID
      if (CHART_ID_OPTIONS.includes(fileName as ChartID)) {
        validFiles.push(file);
      } else {
        questions.push({
          default: false,
          message: `The name of file ${file} is not a ChartID. Still want to add it?`,
          name: file,
          type: 'confirm',
        });
      }
    }
  });

  notices.forEach(notice => console.log(notice));

  if (strict) {
    questions.forEach(({ name }) =>
      console.log(`WARN: The name of file ${name} is not a ChartID. It has been ignored.`),
    );
  } else {
    await inquirer.prompt(questions).then(async answers => {
      await Promise.all(
        Object.keys(answers).map(async file => {
          if (answers[file]) {
            validFiles.push(file);
          }
        }),
      );
    });
  }

  // collect: chartID - G2Plot code string

  await Promise.all(
    validFiles.map(async file => {
      const fileExtName = path.extname(file);
      const fileName = path.basename(file, fileExtName);
      const filePath = path.join(process.cwd(), CODE_PATH, file);
      const result = await fse.readFile(filePath as string, { encoding: 'utf8' });
      chartCodeMap[fileName] = result;
    }),
  );

  // generate html file

  const htmlFile = `<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Code</title>
    <script type="text/javascript" src="https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js"></script>
  </head>
  <body>
    ${Object.keys(chartCodeMap)
      .map(chartID => `<div id="${chartID}"></div>`)
      .join('\n\t\t')}
  </body>
  ${Object.values(chartCodeMap)
    .map(code => `<script>${code}</script>`)
    .join('\n')}
</html>
`;

  await fse.ensureDir(path.dirname(htmlPath));
  await fse.writeFile(htmlPath, htmlFile);
};

// exe script
(async () => {
  const myArgs = process.argv.slice(2);
  const isStrictMode = myArgs.length > 0 && myArgs[0] === 'strict';

  await generateSampleHTML({ strict: isStrictMode, htmlPath: DEFAULT_HTMLPATH });

  console.log('Sample html page generated!');
})();