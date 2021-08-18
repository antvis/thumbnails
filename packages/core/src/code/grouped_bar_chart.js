const { Bar: GroupedBar } = G2Plot;

const grouped_bar_data = [
  { name: 'London', month: 'A', rain: 140 },
  { name: 'London', month: 'B', rain: 115 },
  { name: 'London', month: 'C', rain: 260 },
  { name: 'London', month: 'D', rain: 220 },
  { name: 'Berlin', month: 'A', rain: 160 },
  { name: 'Berlin', month: 'B', rain: 150 },
  { name: 'Berlin', month: 'C', rain: 290 },
  { name: 'Berlin', month: 'D', rain: 260 },
];

const groupedBar = new GroupedBar('grouped_bar_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: grouped_bar_data,
  isGroup: true,
  xField: 'rain',
  yField: 'month',
  seriesField: 'name',
  label: null,
  legend: false,
});

groupedBar.render();
