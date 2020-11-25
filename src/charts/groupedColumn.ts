import { ChartID } from '@antv/knowledge';
import { IChartImageInfo } from '../interfaces';

const id: ChartID = 'grouped_column_chart';

const name: string = 'Grouped Column';

const svgCode: string = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <g fill="none" fill-rule="evenodd">
    <line x1="195" x2="944" y1="892.5" y2="893" stroke="#999" stroke-width="6" opacity=".65"/>
    <line x1="195" x2="944" y1="626.5" y2="626.5" stroke="#999" stroke-width="6" opacity=".65"/>
    <line x1="195" x2="944" y1="360.5" y2="360.5" stroke="#999" stroke-width="6" opacity=".65"/>
    <line x1="195" x2="944" y1="94" y2="94" stroke="#999" stroke-width="6" opacity=".65"/>
    <line x1="476.5" x2="476.5" y1="892" y2="912" stroke="#000" stroke-width="6" opacity=".45"/>
    <line x1="281" x2="281" y1="892" y2="912" stroke="#000" stroke-width="6" opacity=".45"/>
    <line x1="671.5" x2="671.5" y1="892" y2="912" stroke="#000" stroke-width="6" opacity=".45"/>
    <line x1="866.5" x2="866.5" y1="892" y2="912" stroke="#000" stroke-width="6" opacity=".45"/>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="264.324" y="972">A</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="82.408" y="643">100</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="145.1" y="910">0</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="72.8" y="375">200</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="72.8" y="108">300</tspan>
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
    <rect width="48" height="362" x="231" y="528" fill="#5B8FF9"/>
    <rect width="48" height="433" x="287" y="457" fill="#5AD8A6"/>
    <rect width="48" height="314" x="424" y="576" fill="#5B8FF9"/>
    <rect width="48" height="420" x="480" y="470" fill="#5AD8A6"/>
    <rect width="48" height="640" x="620" y="250" fill="#5B8FF9"/>
    <rect width="48" height="782" x="676" y="108" fill="#5AD8A6"/>
    <rect width="48" height="554" x="815" y="336" fill="#5B8FF9"/>
    <rect width="48" height="698" x="871" y="192" fill="#5AD8A6"/>
  </g>
</svg>
`;

const url: string = 'https://gw.alipayobjects.com/zos/antfincdn/B1RjD7aQUe/GroupedColumn.svg';

const GroupedColumn: IChartImageInfo = {
  id,
  name,
  svgCode,
  url,
};

export default GroupedColumn;
