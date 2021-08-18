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
  padding: [10, 20, 20, 20],
  xAxis: {
    tickInterval: 100,
    label: {
      style: {
        fontSize: 12,
      },
      offset: 4,
    },
  },
  yAxis: {
    label: {
      style: {
        fontSize: 12,
      },
    },
  },
  minColumnWidth: 20,
  maxColumnWidth: 20,
});

bar.render();
