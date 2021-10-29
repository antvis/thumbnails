const { Column: StackedColumn } = G2Plot; // REQUIRED: import from G2Plot

const stacked_column_data = [
  { name: 'London', month: 'A', rain: 80 },
  { name: 'London', month: 'B', rain: 60 },
  { name: 'London', month: 'C', rain: 130 },
  { name: 'London', month: 'D', rain: 120 },
  { name: 'Berlin', month: 'A', rain: 80 },
  { name: 'Berlin', month: 'B', rain: 60 },
  { name: 'Berlin', month: 'C', rain: 130 },
  { name: 'Berlin', month: 'D', rain: 120 },
];

const stackedColumn = new StackedColumn('stacked_column_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: stacked_column_data,
  isStack: true,
  xField: 'month',
  yField: 'rain',
  seriesField: 'name',
  label: null,
  legend: false,
  maxColumnWidth: 16,
  animation: false, // REQUIRED: NO animation
  renderer: 'svg', // REQUIRED: render into svg
});

stackedColumn.render();
