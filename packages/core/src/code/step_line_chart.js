const { Line: StepLine } = G2Plot; // REQUIRED: import from G2Plot

const step_line_data = [
  { country: 'Europe', year: '2016', value: 175 },
  { country: 'Europe', year: '2017', value: 260 },
  { country: 'Europe', year: '2018', value: 150 },
  { country: 'Europe', year: '2019', value: 200 },
  { country: 'Europe', year: '2020', value: 120 },
  { country: 'Africa', year: '2016', value: 80 },
  { country: 'Africa', year: '2017', value: 48 },
  { country: 'Africa', year: '2018', value: 100 },
  { country: 'Africa', year: '2019', value: 40 },
  { country: 'Africa', year: '2020', value: 80 },
];

const stepLine = new StepLine('step_line_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: step_line_data,
  xField: 'year',
  yField: 'value',
  seriesField: 'country',
  stepType: 'hvh',
  legend: false,
  xAxis: {
    range: [0, 1],
  },
  yAxis: {
    max: 300,
    tickCount: 3,
  },
  animation: false, // REQUIRED: NO animation
  renderer: 'svg', // REQUIRED: render into svg
});

stepLine.render();
