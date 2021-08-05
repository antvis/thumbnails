import { ChartID } from '@antv/knowledge';

export interface ChartImageInfo {
  id: ChartID;
  name: string;
  svgCode: string;
  g2plotCode?: string;
}
