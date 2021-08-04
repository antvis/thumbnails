import * as puppeteer from 'puppeteer';
import * as path from 'path';
import * as fse from 'fs-extra';
import * as SVGO from 'svgo';
import { SVGO_SETTINGS } from './svgo-settings';
import { CODE_PATH, DEFAULT_HTMLPATH } from './consts';

const svgo: SVGO = new SVGO(SVGO_SETTINGS);

export const getSVGs = async (url: string, ids: string[], screenshotPath = '') => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  page.setViewport({
    width: 1376,
    height: 768,
  });

  await page.goto(url);

  await page.waitForTimeout(3000);

  await Promise.all(
    ids.map(async id => {
      const svgCode = await page.evaluate(id => document.querySelector(`#${id} svg`)?.outerHTML, id);
      if (svgCode) {
        const { data: optSvg } = await svgo.optimize(svgCode);
        await fse.writeFile(path.join(process.cwd(), `src/${id}.svg`), optSvg);
      }
    }),
  );

  if (screenshotPath) {
    await page.screenshot({ path: screenshotPath });
  }

  await browser.close();
};

// exe script
(async () => {
  const chartCodeFiles = await fse.readdir(CODE_PATH);
  const ids = chartCodeFiles.map(file => path.basename(file, path.extname(file)));

  await getSVGs(`file:${DEFAULT_HTMLPATH}`, ids, '/Users/bmw/Desktop/thumbnailsPage.png');
})();
