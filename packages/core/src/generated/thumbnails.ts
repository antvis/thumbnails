// generated file thumbnails.ts

import { ChartImageInfo } from '../interfaces';

import AREA_CHART from './charts/area_chart';
import BAR_CHART from './charts/bar_chart';
import BUBBLE_CHART from './charts/bubble_chart';
import COLUMN_CHART from './charts/column_chart';
import DONUT_CHART from './charts/donut_chart';
import GROUPED_BAR_CHART from './charts/grouped_bar_chart';
import GROUPED_COLUMN_CHART from './charts/grouped_column_chart';
import HEATMAP from './charts/heatmap';
import HISTOGRAM from './charts/histogram';
import LINE_CHART from './charts/line_chart';
import PERCENT_STACKED_AREA_CHART from './charts/percent_stacked_area_chart';
import PERCENT_STACKED_BAR_CHART from './charts/percent_stacked_bar_chart';
import PERCENT_STACKED_COLUMN_CHART from './charts/percent_stacked_column_chart';
import PIE_CHART from './charts/pie_chart';
import RADAR_CHART from './charts/radar_chart';
import SCATTER_PLOT from './charts/scatter_plot';
import STACKED_AREA_CHART from './charts/stacked_area_chart';
import STACKED_BAR_CHART from './charts/stacked_bar_chart';
import STACKED_COLUMN_CHART from './charts/stacked_column_chart';
import STEP_LINE_CHART from './charts/step_line_chart';

const Thumbnails: Partial<Record<string, ChartImageInfo>> = {
  area_chart: AREA_CHART,
  bar_chart: BAR_CHART,
  bubble_chart: BUBBLE_CHART,
  column_chart: COLUMN_CHART,
  donut_chart: DONUT_CHART,
  grouped_bar_chart: GROUPED_BAR_CHART,
  grouped_column_chart: GROUPED_COLUMN_CHART,
  heatmap: HEATMAP,
  histogram: HISTOGRAM,
  line_chart: LINE_CHART,
  percent_stacked_area_chart: PERCENT_STACKED_AREA_CHART,
  percent_stacked_bar_chart: PERCENT_STACKED_BAR_CHART,
  percent_stacked_column_chart: PERCENT_STACKED_COLUMN_CHART,
  pie_chart: PIE_CHART,
  radar_chart: RADAR_CHART,
  scatter_plot: SCATTER_PLOT,
  stacked_area_chart: STACKED_AREA_CHART,
  stacked_bar_chart: STACKED_BAR_CHART,
  stacked_column_chart: STACKED_COLUMN_CHART,
  step_line_chart: STEP_LINE_CHART,
};

export default Thumbnails;

export const THUMBNAIL_IDS = [
  'area_chart',
  'bar_chart',
  'bubble_chart',
  'column_chart',
  'donut_chart',
  'grouped_bar_chart',
  'grouped_column_chart',
  'heatmap',
  'histogram',
  'line_chart',
  'percent_stacked_area_chart',
  'percent_stacked_bar_chart',
  'percent_stacked_column_chart',
  'pie_chart',
  'radar_chart',
  'scatter_plot',
  'stacked_area_chart',
  'stacked_bar_chart',
  'stacked_column_chart',
  'step_line_chart',
] as const;
export type ThumbnailID = typeof THUMBNAIL_IDS[number];
export function isThumbnailID(id: string): id is ThumbnailID {
  return THUMBNAIL_IDS.includes(id as ThumbnailID);
}

export {
  AREA_CHART,
  BAR_CHART,
  BUBBLE_CHART,
  COLUMN_CHART,
  DONUT_CHART,
  GROUPED_BAR_CHART,
  GROUPED_COLUMN_CHART,
  HEATMAP,
  HISTOGRAM,
  LINE_CHART,
  PERCENT_STACKED_AREA_CHART,
  PERCENT_STACKED_BAR_CHART,
  PERCENT_STACKED_COLUMN_CHART,
  PIE_CHART,
  RADAR_CHART,
  SCATTER_PLOT,
  STACKED_AREA_CHART,
  STACKED_BAR_CHART,
  STACKED_COLUMN_CHART,
  STEP_LINE_CHART,
};
