const { Column } = G2Plot; // REQUIRED: import from G2Plot

const column_data = [
  { category: 'A', value: 140 },
  { category: 'B', value: 115 },
  { category: 'C', value: 260 },
  { category: 'D', value: 220 },
];

const column = new Column('column_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: column_data,
  xField: 'category',
  yField: 'value',
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  minColumnWidth: 20,
  maxColumnWidth: 20,
  animation: false, // REQUIRED: NO animation
  renderer: 'svg', // REQUIRED: render into svg
});

column.render();
