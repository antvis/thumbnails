import { ChartID } from '@antv/knowledge';
import Area from './charts/area';
import Bar from './charts/bar';
import Bubble from './charts/bubble';
import Column from './charts/column';
import Donut from './charts/donut';
import GroupedBar from './charts/groupedBar';
import GroupedColumn from './charts/groupedColumn';
import Heatmap from './charts/heatmap';
import Histogram from './charts/histogram';
import MultiLine from './charts/multiLine';
import PercentageStackedArea from './charts/percentageStackedArea';
import PercentageStackedBar from './charts/percentageStackedBar';
import PercentageStackedColumn from './charts/percentageStackedColumn';
import Pie from './charts/pie';
import Radar from './charts/radar';
import Scatter from './charts/scatter';
import StackedArea from './charts/stackedArea';
import StackedBar from './charts/stackedBar';
import StackedColumn from './charts/stackedColumn';

import { IChartImageInfo } from './interfaces';

const Thumbnails: Partial<Record<ChartID, IChartImageInfo>> = {
  area_chart: Area,
  bar_chart: Bar,
  bubble_chart: Bubble,
  column_chart: Column,
  donut_chart: Donut,
  grouped_bar_chart: GroupedBar,
  grouped_column_chart: GroupedColumn,
  heatmap: Heatmap,
  histogram: Histogram,
  line_chart: MultiLine,
  percent_stacked_area_chart: PercentageStackedArea,
  percent_stacked_bar_chart: PercentageStackedBar,
  percent_stacked_column_chart: PercentageStackedColumn,
  pie_chart: Pie,
  radar_chart: Radar,
  scatter_plot: Scatter,
  stacked_area_chart: StackedArea,
  stacked_bar_chart: StackedBar,
  stacked_column_chart: StackedColumn,
};

export default Thumbnails;

// react component for displaying Thumbnail images
export { Thumbnail } from './components/Thumbnail';
