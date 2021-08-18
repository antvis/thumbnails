const { Bar: PercentStackedBar } = G2Plot;

const percent_stacked_bar_data = [
  { country: 'Asia', year: 'A', value: 48 },
  { country: 'Asia', year: 'B', value: 52 },
  { country: 'Asia', year: 'C', value: 10 },
  { country: 'Asia', year: 'D', value: 20 },
  { country: 'Africa', year: 'A', value: 26 },
  { country: 'Africa', year: 'B', value: 24 },
  { country: 'Africa', year: 'C', value: 45 },
  { country: 'Africa', year: 'D', value: 40 },
  { country: 'Europe', year: 'A', value: 26 },
  { country: 'Europe', year: 'B', value: 24 },
  { country: 'Europe', year: 'C', value: 45 },
  { country: 'Europe', year: 'D', value: 40 },
];

const percentStackedBar = new PercentStackedBar('percent_stacked_bar_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: percent_stacked_bar_data,
  maxBarWidth: 16,
  color: chartColors,
  xField: 'value',
  yField: 'year',
  seriesField: 'country',
  isPercent: true,
  isStack: true,
  legend: false,
  xAxis: {
    label: {
      formatter: (value) => {
        return value * 100 + '%';
      },
    },
    tickCount: 3,
  },
});

percentStackedBar.render();
