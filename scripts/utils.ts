import * as path from 'path';
import * as fse from 'fs-extra';
import { ChartID, CHART_ID_OPTIONS, CKBJson } from '@antv/knowledge';

export async function ensureAndResetDir(dir: string): Promise<void> {
  const dirExists = await fse.pathExists(dir);
  if (dirExists) {
    const existFiles = await fse.readdir(dir);
    const existFilesPaths = existFiles.map((file) => path.join(process.cwd(), dir, file));
    await Promise.all(
      existFilesPaths.map(async (path) => {
        await fse.remove(path);
      })
    );
  }

  await fse.ensureDir(dir);
}

export function CKBChartNameOfID(id: ChartID): string {
  const ckb = CKBJson();
  if (CHART_ID_OPTIONS.includes(id) && ckb[id].name) return ckb[id].name;
  return null;
}

export function dashStrToSpaceTitleStr(id: string): string {
  return id
    .split('_')
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function idToName(id: string): string {
  return CKBChartNameOfID(id as ChartID) || dashStrToSpaceTitleStr(id);
}

export function pureFileName(filePath: string): string {
  const extName = path.extname(filePath);
  return path.basename(filePath, extName);
}

export function sortObjByKey(unsortedObject: object) {
  /* eslint-disable no-param-reassign */
  const reducer = (obj: object, key: string) => {
    obj[key] = unsortedObject[key];
    return obj;
  };
  /* eslint-enable no-param-reassign */
  const sortedObj = Object.keys(unsortedObject)
    .sort()
    .reduce(reducer, {});

  return sortedObj;
}
