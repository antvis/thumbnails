import { ChartID } from '@antv/knowledge';
import { IChartImageInfo } from '../interfaces';

const id: ChartID = 'percent_stacked_column_chart';

const name: string = 'Percentage Stacked Column';

const svgCode: string = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <g fill="none" fill-rule="evenodd">
    <line x1="186" x2="935" y1="892.5" y2="893" stroke="#999" stroke-width="6"/>
    <line x1="186" x2="935" y1="493.5" y2="493.5" stroke="#999" stroke-width="6" opacity=".65"/>
    <line x1="186" x2="935" y1="693.5" y2="693.5" stroke="#999" stroke-width="6" opacity=".65"/>
    <line x1="186" x2="935" y1="294.5" y2="294.5" stroke="#999" stroke-width="6" opacity=".65"/>
    <line x1="186" x2="935" y1="94.5" y2="94.5" stroke="#999" stroke-width="6" opacity=".65"/>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="59.44" y="710">25%</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="59.44" y="509">50%</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="136.1" y="910">0</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="55.616" y="309">75%</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="35.148" y="108">100%</tspan>
    </text>
    <line x1="476.5" x2="476.5" y1="892" y2="912" stroke="#999" stroke-width="6"/>
    <line x1="281" x2="281" y1="892" y2="912" stroke="#999" stroke-width="6"/>
    <line x1="671.5" x2="671.5" y1="892" y2="912" stroke="#999" stroke-width="6"/>
    <line x1="866.5" x2="866.5" y1="892" y2="912" stroke="#999" stroke-width="6"/>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="264.324" y="972">A</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="458.012" y="972">B</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="653.456" y="972">C</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="850.292" y="972">D</tspan>
    </text>
    <g transform="translate(242 94)">
      <rect width="85" height="214" y="582" fill="#5B8FF9"/>
      <rect width="85" height="214" y="368" fill="#5AD8A6"/>
      <rect width="85" height="185" x="194" y="611" fill="#5B8FF9"/>
      <rect width="85" height="185" x="194" y="426" fill="#5AD8A6"/>
      <rect width="85" height="378" x="387" y="418" fill="#5B8FF9"/>
      <polygon fill="#5AD8A6" points="387 79 472 79 472 417 387 417"/>
      <rect width="85" height="327" x="581" y="469" fill="#5B8FF9"/>
      <rect width="85" height="327" x="581" y="142" fill="#5AD8A6"/>
      <rect width="85" height="142" x="581" fill="#FF9845"/>
      <rect width="85" height="368" fill="#FF9845"/>
      <rect width="85" height="426" x="194" fill="#FF9845"/>
      <polygon fill="#FF9845" points="387 0 472 0 472 79 387 79"/>
    </g>
  </g>
</svg>
`;

const url: string = 'https://gw.alipayobjects.com/zos/antfincdn/SKKOJv9T4x/PercentageStackedColumn.svg';

const PercentageStackedColumn: IChartImageInfo = {
  id,
  name,
  svgCode,
  url,
};

export default PercentageStackedColumn;
