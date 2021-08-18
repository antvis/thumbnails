const { Radar } = G2Plot;

// 数据更新于 2021.01.09
const radar_data = [
  { name: 'A', star: 90 },
  { name: 'B', star: 75 },
  { name: 'C', star: 20 },
  { name: 'D', star: 70 },
  { name: 'E', star: 50 },
  { name: 'F', star: 100 },
];

const radarPlot = new Radar('radar_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: radar_data.map((d) => ({ ...d, star: Math.sqrt(d.star) })),
  xField: 'name',
  yField: 'star',
  appendPadding: [0, 10, 0, 10],
  meta: {
    star: {
      alias: 'star 数量',
      min: 0,
      nice: true,
      formatter: (v) => Number(v).toFixed(2),
    },
  },
  xAxis: {
    line: null,
    tickLine: null,
    grid: {
      line: {
        style: {
          lineDash: null,
        },
      },
    },
  },
  yAxis: {
    line: null,
    tickLine: null,
    label: false,
    grid: {
      line: {
        type: 'line',
        style: {
          lineDash: null,
        },
      },
    },
  },
  shape: 'circle',
  // 开启辅助点
  point: {
    size: 3,
    color: '#5B8FF9',
    style: {
      fill: '#5B8FF9',
    },
  },
  area: {},
});

radarPlot.render();
