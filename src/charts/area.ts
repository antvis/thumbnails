import { ChartID } from '@antv/knowledge';
import { IChartImageInfo } from '../interfaces';

const id: ChartID = 'area_chart';

const name: string = 'Area';

const svgCode: string = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <g fill="none" fill-rule="evenodd">
    <polygon fill="#5B8FF9" fill-rule="nonzero" points="186 472 365.802 660 539.594 416 746.5 454 933.5 248 935 892 186 892" opacity=".3"/>
    <polyline stroke="#5B8FF9" stroke-width="12" points="186 472 365.802 660 539.594 416 746.5 454 933.5 248"/>
    <g transform="translate(65.5 57)">
      <line x1="122.5" x2="871.5" y1="303.5" y2="303.5" stroke="#999" stroke-width="6" opacity=".65"/>
      <line x1="122.5" x2="871.5" y1="835.5" y2="836" stroke="#999" stroke-width="6"/>
      <line x1="122.5" x2="871.5" y1="569.5" y2="569.5" stroke="#999" stroke-width="6" opacity=".65"/>
      <line x1="122.5" x2="871.5" y1="37" y2="37" stroke="#999" stroke-width="6" opacity=".65"/>
      <line x1="122.5" x2="122.5" y1="835" y2="855" stroke="#999" stroke-width="6"/>
      <line x1="309" x2="309" y1="835" y2="855" stroke="#999" stroke-width="6"/>
      <line x1="496" x2="496" y1="835" y2="855" stroke="#999" stroke-width="6"/>
      <line x1="683" x2="683" y1="835" y2="855" stroke="#999" stroke-width="6"/>
      <line x1="870" x2="870" y1="835" y2="855" stroke="#999" stroke-width="6"/>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="68.5" y="905">2016</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="9.5" y="586">100</tspan>
      </text>
      <text fill="#000" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400" opacity=".45">
        <tspan x="72.5" y="853">0</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="0" y="318">200</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="0" y="51">300</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="255.5" y="905">2017</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="439.5" y="905">2018</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="626.5" y="905">2019</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="813.5" y="905">2020</tspan>
      </text>
    </g>
  </g>
</svg>
`;

const url: string = 'https://gw.alipayobjects.com/zos/antfincdn/V5MVzGe7GA/Area.svg';

const Area: IChartImageInfo = {
  id,
  name,
  svgCode,
  url,
};

export default Area;
