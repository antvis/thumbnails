// generated file thumbnails.ts

import { ChartImageInfo } from '../interfaces';

import AREA_CHART from './charts/area_chart';
import BAR_CHART from './charts/bar_chart';

const Thumbnails: Partial<Record<string, ChartImageInfo>> = {
  area_chart: AREA_CHART,
  bar_chart: BAR_CHART,
};

export default Thumbnails;

export const THUMBNAIL_IDS = ['area_chart', 'bar_chart'] as const;
export type ThumbnailID = typeof THUMBNAIL_IDS[number];
export function isThumbnailID(id: string): id is ThumbnailID {
  return THUMBNAIL_IDS.includes(id as ThumbnailID);
}

export { AREA_CHART, BAR_CHART };
