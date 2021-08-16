import * as path from 'path';
import * as os from 'os';
import puppeteer from 'puppeteer';
import * as fse from 'fs-extra';
import SVGO from 'svgo';
import { SVGO_SETTINGS } from './svgo-settings';
import { CODE_DIR, SVG_DIR, DEFAULT_HTMLPATH } from './consts';
import { ensureAndResetDir } from './utils';

const svgo: SVGO = new SVGO(SVGO_SETTINGS);

/**
 * Extract svg code of each chart from headless webpage
 * and save these svg files to specific directory.
 *
 * @param url URL of headless webpage.
 * @param ids chart ids | file names under code dir.
 * @param svgDir path for exporting svg files.
 * @param screenshotPath path for saving a screenshot of the headless webpage. (optional)
 */
export const getSVGs = async (url: string, ids: string[], svgDir: string, screenshotPath = '') => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  page.setViewport({
    width: 1376,
    height: 768,
  });

  await page.goto(url);

  await page.waitForTimeout(3000);

  await ensureAndResetDir(svgDir);
  await Promise.all(
    ids.map(async (id) => {
      const svgCode = await page.evaluate((id) => document.querySelector(`#${id} svg`)?.outerHTML, id);
      if (svgCode) {
        const { data: optSvg } = await svgo.optimize(svgCode);
        await fse.writeFile(path.join(svgDir, `${id}.svg`), optSvg);
      }
    })
  );

  if (screenshotPath) {
    await page.screenshot({ path: screenshotPath });
  }

  await browser.close();
};

// exe script
(async () => {
  const chartCodeFiles = await fse.readdir(CODE_DIR);
  const ids = chartCodeFiles.map((file) => path.basename(file, path.extname(file)));
  const DESKTOP = path.join(os.homedir(), 'Desktop');

  await getSVGs(
    `file:${path.join(process.cwd(), DEFAULT_HTMLPATH)}`,
    ids,
    SVG_DIR,
    path.join(DESKTOP, 'thumbPage.png')
  );
})();
