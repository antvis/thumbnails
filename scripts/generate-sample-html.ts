import * as path from 'path';
import { CHART_ID_OPTIONS, ChartID } from '@antv/knowledge';
import * as inquirer from 'inquirer';
import * as fse from 'fs-extra';
import { CODE_DIR, DEFAULT_HTMLPATH } from './consts';
import { sortObjByKey } from './utils';

interface Params {
  codeDir: string;
  htmlPath: string;
  strict?: boolean;
}

/**
 * Generate a HTML page that contains all chart doms by G2Plot.
 *
 * @param Params.codeDir directory of G2Plot source code templates.
 * @param Params.htmlPath path of the generated html file.
 * @param Params.strict whether allow chart ids outside AVA CKB. Default false.
 */
export const generateSampleHTML = async ({ codeDir, htmlPath, strict = false }: Params) => {
  const validFiles: string[] = [];
  const chartCodeMap: Record<string, string> = {};

  const questions: inquirer.Question[] = [];
  const notices: string[] = [];

  // read js files of chart samples

  const codeDirExists = await fse.pathExists(codeDir);
  if (!codeDirExists) return;

  const chartCodeFiles = await fse.readdir(codeDir);
  if (!chartCodeFiles || chartCodeFiles.length === 0) return;

  chartCodeFiles.forEach((file) => {
    const fileExtName = path.extname(file);
    const fileName = path.basename(file, fileExtName);

    if (fileExtName !== '.js') {
      notices.push(`WARN: File ${file} is not with .js and it has been ignored.`);
    } else if (CHART_ID_OPTIONS.includes(fileName as ChartID)) {
      // The name of `file` should be a ChartID
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
    questions.forEach(({ name }) =>
      console.log(`WARN: The name of file ${name} is not a ChartID. It has been ignored.`)
    );
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

  // collect: chartID - G2Plot code string

  await Promise.all(
    validFiles.map(async (file) => {
      const fileExtName = path.extname(file);
      const fileName = path.basename(file, fileExtName);
      const filePath = path.join(process.cwd(), codeDir, file);
      const result = await fse.readFile(filePath as string, { encoding: 'utf8' });
      chartCodeMap[fileName] = result;
    })
  );

  const sortedChartCodeMap = sortObjByKey(chartCodeMap);

  // generate html file

  const htmlFile = `<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Code</title>
    <style>
      .chart_wrapper {
        display: flex;
        flex-wrap: wrap;
      }
      .chart_item {
        margin: 15px;
      }
    </style>
    <script type="text/javascript" src="https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js"></script>
  </head>
  <body>
    <div class="chart_wrapper">
      ${Object.keys(sortedChartCodeMap)
        .map((chartID) => `<div id="${chartID}" class="chart_item"></div>`)
        .join('\n\t\t')}
    </div>
  </body>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('svg').forEach(function(svg) {
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      });
    });
  </script>
  <script>
    const chartColors = ['#5B8FF9', '#5AD8A6', '#FF9845', '#F6BD16', '#A37FDB', '#1E9493', '#FF99C3'];
  </script>
  ${Object.values(sortedChartCodeMap)
    .map((code) => `<script>${code}</script>`)
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

  await generateSampleHTML({ codeDir: CODE_DIR, htmlPath: DEFAULT_HTMLPATH, strict: isStrictMode });

  console.log('Sample html page generated!');
})();
