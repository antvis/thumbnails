import { ChartID } from '@antv/knowledge';
import { IChartImageInfo } from '../interfaces';

const id: ChartID = 'stacked_area_chart';

const name: string = 'Stacked Area';

const svgCode: string = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <g fill="none" fill-rule="evenodd">
    <path fill="#5AD8A6" fill-rule="nonzero" d="M187,472 L366.801877,660 L540.594464,416 L747.5,454 L934.5,248 L936,892 L934.5,892 L934.5,578 L747.5,711 L540.594464,673 L366.801877,784 L187,729 L187,472 Z" opacity=".3"/>
    <polygon fill="#5B8FF9" fill-rule="nonzero" points="187 729 366.802 784 540.594 673 747.5 711 934.5 578 934.5 892 187 892" opacity=".3"/>
    <polyline stroke="#5B8FF9" stroke-width="12" points="187 729 366.802 784 540.594 673 747.5 711 934.5 578"/>
    <polyline stroke="#5AD8A6" stroke-width="12" points="187 472 366.802 660 540.594 416 747.5 454 934.5 248"/>
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

const url: string = 'https://gw.alipayobjects.com/zos/antfincdn/absrggHIRV/StackedArea.svg';

const StackedArea: IChartImageInfo = {
  id,
  name,
  svgCode,
  url,
};

export default StackedArea;
