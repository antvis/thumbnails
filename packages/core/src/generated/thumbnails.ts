// generated file thumbnails.ts

import { ChartImageInfo } from '../interfaces';

import AREA_CHART from './charts/area_chart';
import PERCENT_STACKED_AREA_CHART from './charts/percent_stacked_area_chart';

const Thumbnails: Partial<Record<string, ChartImageInfo>> = {
  area_chart: AREA_CHART,
  percent_stacked_area_chart: PERCENT_STACKED_AREA_CHART,
};

export default Thumbnails;

export const THUMBNAIL_IDS = ['area_chart', 'percent_stacked_area_chart'] as const;
export type ThumbnailID = typeof THUMBNAIL_IDS[number];
export function isThumbnailID(id: string): id is ThumbnailID {
  return THUMBNAIL_IDS.includes(id as ThumbnailID);
}

export { AREA_CHART, PERCENT_STACKED_AREA_CHART };
