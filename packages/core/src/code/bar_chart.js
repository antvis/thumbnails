const { Bar } = G2Plot;

const bar_data = [
  { category: 'A', value: 140 },
  { category: 'B', value: 115 },
  { category: 'C', value: 260 },
  { category: 'D', value: 220 },
];

const bar = new Bar('bar_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: bar_data,
  xField: 'value',
  yField: 'category',
  xAxis: {
    tickInterval: 100,
    label: {
      style: {
        fontSize: 12,
      },
    },
  },
  yAxis: {
    label: {
      style: {
        fontSize: 12,
      },
    },
  },
  renderer: 'svg',
});

bar.render();
