const { Pie } = G2Plot; // REQUIRED: import from G2Plot

const pie_data = [
  { type: 'A', value: 35 },
  { type: 'B', value: 50 },
  { type: 'C', value: 15 },
];

const pie = new Pie('pie_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: pie_data,
  padding: 20,
  angleField: 'value',
  colorField: 'type',
  color: chartColors,
  label: {
    type: 'inner',
    offset: '-50%',
    content: '{name}',
    autoRotate: false,
    style: {
      textAlign: 'center',
      fontSize: 14,
    },
  },
  legend: false,
  animation: false, // REQUIRED: NO animation
  renderer: 'svg', // REQUIRED: render into svg
});

pie.render();
