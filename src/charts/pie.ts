import { ChartID } from '@antv/knowledge';
import { IChartImageInfo } from '../interfaces';

const id: ChartID = 'pie_chart';

const name: string = 'Pie';

const svgCode: string = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <g fill="none" fill-rule="evenodd">
    <path fill="#5B8FF9" d="M511.558569,511.073731 L518.704783,115.853689 C676.440089,118.50829 817.406785,214.535359 877.43583,360.222693 C937.464876,505.910027 905.081608,673.40922 795.02712,786.473453 L511.558569,511.073731 Z" opacity=".95"/>
    <path fill="#5AD8A6" d="M512.629376,510.996346 L796.762239,786.92856 C647.312067,940.403181 403.025834,947.830805 244.959656,803.706347 C86.8934779,659.581888 72.1608518,415.981331 211.681067,253.452593 L512.629376,510.996346 Z" opacity=".95"/>
    <path fill="#FF9845" d="M512.343261,511.007891 L211,253.802439 C288.23896,164.06088 401.511905,113.188068 519.946387,115.049348 L512.343261,511.007891 Z" opacity=".95"/>
    <text fill="#000" font-family="PingFangSC-Medium, PingFang SC" font-size="71.409" font-weight="400">
      <tspan x="357.442" y="688">B</tspan>
    </text>
    <text fill="#000" font-family="PingFangSC-Medium, PingFang SC" font-size="71.409" font-weight="400">
      <tspan x="681.841" y="461.988">A</tspan>
    </text>
    <text fill="#FFF" font-family="PingFangSC-Regular, PingFang SC" font-size="72">
      <tspan x="380.792" y="325">C</tspan>
    </text>
  </g>
</svg>
`;

const url: string = 'https://gw.alipayobjects.com/zos/antfincdn/9tQaMGduES/Pie.svg';

const Pie: IChartImageInfo = {
  id,
  name,
  svgCode,
  url,
};

export default Pie;
