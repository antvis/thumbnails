const { Column: GroupedColumn } = G2Plot; // REQUIRED: import from G2Plot

const grouped_column_data = [
  { name: 'London', month: 'A', rain: 140 },
  { name: 'London', month: 'B', rain: 115 },
  { name: 'London', month: 'C', rain: 260 },
  { name: 'London', month: 'D', rain: 220 },
  { name: 'Berlin', month: 'A', rain: 160 },
  { name: 'Berlin', month: 'B', rain: 150 },
  { name: 'Berlin', month: 'C', rain: 290 },
  { name: 'Berlin', month: 'D', rain: 260 },
];

const groupedColumn = new GroupedColumn('grouped_column_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: grouped_column_data,
  isGroup: true,
  xField: 'month',
  yField: 'rain',
  seriesField: 'name',
  label: null,
  legend: false,
  animation: false, // REQUIRED: NO animation
  renderer: 'svg', // REQUIRED: render into svg
});

groupedColumn.render();
