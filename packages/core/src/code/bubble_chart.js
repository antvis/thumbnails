const { Scatter: BubbleScatter } = G2Plot;
const bubbleMap = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
};
// 数据更新于 2021.01.09
const bubble_scatter_data = [
  { HA: 'A', Team: 'Torino', xGconceded: 5.3, Shotconceded: 200, Result: 17 },
  { HA: 'B', Team: 'Atalanta', xGconceded: 4.2, Shotconceded: 100, Result: 50 },
  { HA: 'C', Team: 'Milan', xGconceded: 7.4, Shotconceded: 220, Result: 50 },
  { HA: 'D', Team: 'Chievo', xGconceded: 7.4, Shotconceded: 100, Result: 50 },
  { HA: 'E', Team: 'Bologna', xGconceded: 3.7, Shotconceded: 230, Result: 25 },
  { HA: 'F', Team: 'Frosinone', xGconceded: 6.4, Shotconceded: 160, Result: 10 },
  { HA: 'G', Team: 'Lazio', xGconceded: 5.5, Shotconceded: 160, Result: 15 },
];

const bubbleScatterPlot = new BubbleScatter('bubble_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: bubble_scatter_data,
  xField: 'xGconceded',
  yField: 'Shotconceded',
  colorField: 'HA',
  sizeField: 'Result',
  xAxis: {
    min: 2,
    max: 10,
    label: null,
    line: null,
  },
  yAxis: {
    min: 0,
    max: 300,
    label: null,
    line: null,
    grid: null,
  },
  size: [8, 40],
  shape: 'circle',
  color: chartColors,
  pointStyle: (item) => {
    return {
      fillOpacity: 0.6,
      stroke: chartColors[bubbleMap[item['HA']]],
      lineWidth: 1,
      strokeOpacity: 1,
    };
  },
  // pointStyle: {
  //   fillOpacity: 0.6,
  // },
  legend: false,
});

bubbleScatterPlot.render();
