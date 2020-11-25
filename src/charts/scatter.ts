import { ChartID } from '@antv/knowledge';
import { IChartImageInfo } from '../interfaces';

const id: ChartID = 'scatter_plot';

const name: string = 'Scatter';

const svgCode: string = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <g fill="none" fill-rule="evenodd">
    <g transform="translate(75.5 57)">
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
        <tspan x="107.1" y="905">2</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="9.908" y="586">100</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="72.6" y="853">0</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x=".3" y="318">200</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x=".3" y="51">300</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="293.1" y="905">4</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="480.1" y="905">6</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400" opacity=".8">
        <tspan x="669.1" y="905">8</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="847.308" y="905">10</tspan>
      </text>
    </g>
    <circle cx="307" cy="670" r="36" fill="#5B8FF9"/>
    <circle cx="528" cy="523" r="36" fill="#5B8FF9"/>
    <circle cx="353" cy="402" r="36" fill="#5B8FF9"/>
    <circle cx="420" cy="549" r="36" fill="#5B8FF9"/>
    <circle cx="680" cy="369" r="36" fill="#5B8FF9"/>
    <circle cx="751" cy="566" r="36" fill="#5B8FF9"/>
    <circle cx="833" cy="363" r="36" fill="#5B8FF9"/>
    <circle cx="564" cy="290" r="36" fill="#5B8FF9"/>
  </g>
</svg>
`;

const url: string = 'https://gw.alipayobjects.com/zos/antfincdn/6RTI6FzYFj/Scatter.svg';

const Scatter: IChartImageInfo = {
  id,
  name,
  svgCode,
  url,
};

export default Scatter;
