const { Bar: StackedBar } = G2Plot;

const stacked_bar_data = [
  { name: 'London', month: 'A', rain: 80 },
  { name: 'London', month: 'B', rain: 60 },
  { name: 'London', month: 'C', rain: 130 },
  { name: 'London', month: 'D', rain: 120 },
  { name: 'Berlin', month: 'A', rain: 80 },
  { name: 'Berlin', month: 'B', rain: 60 },
  { name: 'Berlin', month: 'C', rain: 130 },
  { name: 'Berlin', month: 'D', rain: 120 },
];

const stackedBar = new StackedBar('stacked_bar_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: stacked_bar_data,
  isStack: true,
  xField: 'rain',
  yField: 'month',
  seriesField: 'name',
  label: null,
  legend: false,
  maxBarWidth: 16,
});

stackedBar.render();
