const { Area: StackedArea } = G2Plot; // REQUIRED: import from G2Plot

const stacked_area_data = [
  { name: 'London', year: '2016', rain: 65 },
  { name: 'London', year: '2017', rain: 57 },
  { name: 'London', year: '2018', rain: 90 },
  { name: 'London', year: '2019', rain: 85 },
  { name: 'London', year: '2020', rain: 120 },
  { name: 'Berlin', year: '2016', rain: 80 },
  { name: 'Berlin', year: '2017', rain: 45 },
  { name: 'Berlin', year: '2018', rain: 90 },
  { name: 'Berlin', year: '2019', rain: 85 },
  { name: 'Berlin', year: '2020', rain: 120 },
];

const stackedArea = new StackedArea('stacked_area_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: stacked_area_data,
  isStack: true,
  xField: 'year',
  yField: 'rain',
  seriesField: 'name',
  label: null,
  legend: false,
  color: chartColors,
  xAxis: {
    range: [0, 1],
  },
  areaStyle: {
    fillOpacity: 0.3,
  },
  yAxis: {
    max: 300,
    tickCount: 3,
  },
  animation: false, // REQUIRED: NO animation
  renderer: 'svg', // REQUIRED: render into svg
});

stackedArea.render();
