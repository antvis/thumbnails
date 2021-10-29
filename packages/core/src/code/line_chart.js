const { Line } = G2Plot; // REQUIRED: import from G2Plot

const line_data = [
  { name: 'London', year: '2016', rain: 130 },
  { name: 'London', year: '2017', rain: 115 },
  { name: 'London', year: '2018', rain: 160 },
  { name: 'London', year: '2019', rain: 140 },
  { name: 'London', year: '2020', rain: 180 },
  { name: 'Berlin', year: '2016', rain: 160 },
  { name: 'Berlin', year: '2017', rain: 90 },
  { name: 'Berlin', year: '2018', rain: 180 },
  { name: 'Berlin', year: '2019', rain: 170 },
  { name: 'Berlin', year: '2020', rain: 240 },
];

const line = new Line('line_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: line_data,
  xField: 'year',
  yField: 'rain',
  seriesField: 'name',
  xAxis: {
    range: [0, 1],
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  yAxis: {
    max: 300,
    tickCount: 3,
  },
  legend: false,
  animation: false, // REQUIRED: NO animation
  renderer: 'svg', // REQUIRED: render into svg
});

line.render();
