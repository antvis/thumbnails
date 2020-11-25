import { ChartID } from '@antv/knowledge';
import { IChartImageInfo } from '../interfaces';

const id: ChartID = 'bubble_chart';

const name: string = 'Bubble';

const svgCode: string = `
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <g fill="none" fill-rule="evenodd">
    <circle cx="704" cy="704" r="192" fill="#FFEB74" stroke="#FACE2F" stroke-width="6"/>
    <circle cx="502.5" cy="541.5" r="49.5" fill="#FFD7F5" stroke="#FF99C3" stroke-width="6"/>
    <circle cx="475.5" cy="433.5" r="58.5" fill="#A0E6FF" stroke="#59B6DA" stroke-width="6"/>
    <circle cx="307.5" cy="320.5" r="95.5" fill="#EBC6FF" stroke="#A37FDB" stroke-width="6"/>
    <circle cx="582" cy="512" r="32" fill="#6ED7D5" stroke="#1E9493" stroke-width="6"/>
    <circle cx="704" cy="320" r="192" fill="#FFB592" stroke="#E86452" stroke-width="6"/>
    <circle cx="320" cy="704" r="192" fill="#94F5CA" stroke="#5AD8A6" stroke-width="6"/>
  </g>
</svg>
`;

const url: string = 'https://gw.alipayobjects.com/zos/antfincdn/RwqApn9SNQ/Bubble.svg';

const Bubble: IChartImageInfo = {
  id,
  name,
  svgCode,
  url,
};

export default Bubble;
