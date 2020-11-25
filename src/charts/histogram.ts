import { ChartID } from '@antv/knowledge';
import { IChartImageInfo } from '../interfaces';

const id: ChartID = 'histogram';

const name: string = 'Histogram';

const svgCode: string = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <g fill="none" fill-rule="evenodd">
    <line x1="178" x2="927" y1="892.5" y2="893" stroke="#999" stroke-width="6"/>
    <line x1="178" x2="927" y1="626.5" y2="626.5" stroke="#999" stroke-width="6" opacity=".65"/>
    <line x1="178" x2="927" y1="360.5" y2="360.5" stroke="#999" stroke-width="6" opacity=".65"/>
    <line x1="178" x2="927" y1="94" y2="94" stroke="#999" stroke-width="6" opacity=".65"/>
    <line x1="551.5" x2="551.5" y1="892" y2="912" stroke="#999" stroke-width="6"/>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="166.5" y="962">2</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="65" y="643">100</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="128" y="910">0</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="55.5" y="375">200</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="55.5" y="108">300</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="347.5" y="962">4</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="533.5" y="962">6</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="716.5" y="962">8</tspan>
    </text>
    <text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400">
      <tspan x="884.5" y="962">10</tspan>
    </text>
    <rect width="81" height="108" x="177" y="782" fill="#5B8FF9"/>
    <rect width="81" height="231" x="270" y="659" fill="#5B8FF9"/>
    <rect width="81" height="301" x="363" y="589" fill="#5B8FF9"/>
    <rect width="82" height="445" x="455" y="445" fill="#5B8FF9"/>
    <rect width="82" height="669" x="548" y="221" fill="#5B8FF9"/>
    <rect width="81" height="536" x="641" y="354" fill="#5B8FF9"/>
    <rect width="81" height="234" x="734" y="656" fill="#5B8FF9"/>
    <rect width="81" height="67" x="827" y="823" fill="#5B8FF9"/>
    <line x1="907.5" x2="907.5" y1="892" y2="912" stroke="#999" stroke-width="6"/>
    <line x1="182" x2="182" y1="892" y2="912" stroke="#999" stroke-width="6"/>
    <line x1="734.5" x2="734.5" y1="892" y2="912" stroke="#999" stroke-width="6"/>
    <line x1="363.5" x2="363.5" y1="892" y2="912" stroke="#999" stroke-width="6"/>
  </g>
</svg>
`;

const url: string =
  'http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/antfincdn/VfwdcWnr0u/Histogram.svg';

const Histogram: IChartImageInfo = {
  id,
  name,
  svgCode,
  url,
};

export default Histogram;
