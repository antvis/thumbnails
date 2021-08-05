// area_chart

import { ChartImageInfo } from '../interfaces';

const AREA_CHART: ChartImageInfo = {
  id: 'area_chart',
  name: 'Area Chart',
  svgCode:
    '<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><g fill="none" fill-rule="evenodd"><path fill="#5B8FF9" fill-rule="nonzero" d="M186 472l179.802 188 173.792-244L746.5 454l187-206 1.5 644H186z" opacity=".3"/><path stroke="#5B8FF9" stroke-width="12" d="M186 472l179.802 188 173.792-244L746.5 454l187-206"/><path stroke="#999" stroke-width="6" d="M188 360.5h749" opacity=".65"/><path stroke="#999" stroke-width="6" d="M188 892.5l749 .5"/><path stroke="#999" stroke-width="6" d="M188 626.5h749M188 94h749" opacity=".65"/><path stroke="#999" stroke-width="6" d="M188 892v20M374.5 892v20M561.5 892v20M748.5 892v20M935.5 892v20"/><text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400" transform="translate(65.5 57)"><tspan x="68.5" y="905">2016</tspan></text><text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400" transform="translate(65.5 57)"><tspan x="9.5" y="586">100</tspan></text><text fill="#000" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400" opacity=".45" transform="translate(65.5 57)"><tspan x="72.5" y="853">0</tspan></text><text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400" transform="translate(65.5 57)"><tspan x="0" y="318">200</tspan></text><text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400" transform="translate(65.5 57)"><tspan x="0" y="51">300</tspan></text><text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400" transform="translate(65.5 57)"><tspan x="255.5" y="905">2017</tspan></text><text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400" transform="translate(65.5 57)"><tspan x="439.5" y="905">2018</tspan></text><text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400" transform="translate(65.5 57)"><tspan x="626.5" y="905">2019</tspan></text><text fill="#999" font-family="PingFangSC-Medium, PingFang SC" font-size="48" font-weight="400" transform="translate(65.5 57)"><tspan x="813.5" y="905">2020</tspan></text></g></svg>',
  g2plotCode:
  `import { Area } from '@antv/g2plot';

  const data = [
    { 'year': 2016, value: 150 },
    { 'year': 2017, value: 90 },
    { 'year': 2018, value: 180 },
    { 'year': 2019, value: 170 },
    { 'year': 2020, value: 240 },
  ]
  
  const area = new Area('container', {
    height: 200,
    width: 200,
    autoFit: false,
    data,
    xField: 'year',
    yField: 'value',
    xAxis: {
      range: [0, 1],
      label: {
        style: {
          fontSize: 12
        }
      }
    },
    yAxis:{
      tickInterval:100,
      label:{
        style:{
          fontSize:12
        }
      }
    }
  });
  area.render();`
};

export default AREA_CHART;
