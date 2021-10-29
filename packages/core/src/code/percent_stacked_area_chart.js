const { Area: PercentStackedArea } = G2Plot; // REQUIRED: import from G2Plot

const percent_stacked_area_data = [
  { country: 'Europe', year: '2016', value: 35 },
  { country: 'Europe', year: '2017', value: 52 },
  { country: 'Europe', year: '2018', value: 30 },
  { country: 'Europe', year: '2019', value: 40 },
  { country: 'Europe', year: '2020', value: 10 },
  { country: 'Africa', year: '2016', value: 39 },
  { country: 'Africa', year: '2017', value: 24 },
  { country: 'Africa', year: '2018', value: 25 },
  { country: 'Africa', year: '2019', value: 20 },
  { country: 'Africa', year: '2020', value: 40 },
  { country: 'Asia', year: '2016', value: 26 },
  { country: 'Asia', year: '2017', value: 24 },
  { country: 'Asia', year: '2018', value: 45 },
  { country: 'Asia', year: '2019', value: 40 },
  { country: 'Asia', year: '2020', value: 50 },
];

const percentStackedArea = new PercentStackedArea('percent_stacked_area_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: percent_stacked_area_data,
  color: chartColors,
  xField: 'year',
  yField: 'value',
  seriesField: 'country',
  areaStyle: {
    fillOpacity: 0.3,
  },
  padding: [10, 20, 24, 40],
  isPercent: true,
  startOnZero: true,
  xAxis: {
    range: [0, 1],
  },
  yAxis: {
    label: {
      formatter: (value) => {
        return `${value * 100}%`;
      },
    },
    tickCount: 3,
  },
  legend: false,
  animation: false, // REQUIRED: NO animation
  renderer: 'svg', // REQUIRED: render into svg
});

percentStackedArea.render();
