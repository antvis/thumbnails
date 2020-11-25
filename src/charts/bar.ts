import { ChartID } from '@antv/knowledge';
import { IChartImageInfo } from '../interfaces';

const id: ChartID = 'bar_chart';

const name: string = 'Bar';

const svgCode: string = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <g fill="none" fill-rule="evenodd">
    <g transform="translate(59.734 94)">
      <line x1="-328" x2="468" y1="398.234" y2="398.766" stroke="#999" stroke-width="6" transform="rotate(90 70 398.5)"/>
      <line x1="-61.234" x2="734.766" y1="398.5" y2="398.5" stroke="#999" stroke-width="6" opacity=".65" transform="rotate(90 336.766 398.5)"/>
      <line x1="204.766" x2="1000.766" y1="398.5" y2="398.5" stroke="#999" stroke-width="6" opacity=".65" transform="rotate(90 602.766 398.5)"/>
      <line x1="472.266" x2="1268.266" y1="398.5" y2="398.5" stroke="#999" stroke-width="6" opacity=".65" transform="rotate(90 870.266 398.5)"/>
      <line x1="61.266" x2="61.266" y1="290" y2="310" stroke="#999" stroke-width="6" transform="rotate(90 61.266 300)"/>
      <line x1="61.266" x2="61.266" y1="94.5" y2="114.5" stroke="#999" stroke-width="6" transform="rotate(90 61.266 104.5)"/>
      <line x1="61.266" x2="61.266" y1="485" y2="505" stroke="#999" stroke-width="6" transform="rotate(90 61.266 495)"/>
      <line x1="61.266" x2="61.266" y1="680" y2="700" stroke="#999" stroke-width="6" transform="rotate(90 61.266 690)"/>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="1.766" y="131">A</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="1.766" y="325">B</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x=".266" y="521.5">C</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x=".766" y="718">D</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="60.266" y="867">0</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="297.266" y="867">100</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="566.266" y="867">200</tspan>
      </text>
      <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
        <tspan x="826.266" y="867">300</tspan>
      </text>
    </g>
    <rect width="85" height="362" x="271.5" y="21" fill="#5B8FF9" transform="rotate(90 314 202)"/>
    <rect width="85" height="314" x="247.5" y="239" fill="#5B8FF9" transform="rotate(90 290 396)"/>
    <rect width="85" height="640" x="410.5" y="269" fill="#5B8FF9" transform="rotate(90 453 589)"/>
    <rect width="85" height="554" x="367.5" y="506" fill="#5B8FF9" transform="rotate(90 410 783)"/>
  </g>
</svg>
`;

const url: string = 'https://gw.alipayobjects.com/zos/antfincdn/LV5kBDLcHa/Bar.svg';

const Bar: IChartImageInfo = {
  id,
  name,
  svgCode,
  url,
};

export default Bar;
