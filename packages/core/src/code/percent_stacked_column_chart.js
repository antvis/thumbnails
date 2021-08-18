const { Column: PercentStackedColumn } = G2Plot;

const percent_stacked_column_data = [
  { country: 'Europe', year: 'A', value: 48 },
  { country: 'Europe', year: 'B', value: 52 },
  { country: 'Europe', year: 'C', value: 10 },
  { country: 'Europe', year: 'D', value: 20 },
  { country: 'Africa', year: 'A', value: 26 },
  { country: 'Africa', year: 'B', value: 24 },
  { country: 'Africa', year: 'C', value: 45 },
  { country: 'Africa', year: 'D', value: 40 },
  { country: 'Asia', year: 'A', value: 26 },
  { country: 'Asia', year: 'B', value: 24 },
  { country: 'Asia', year: 'C', value: 45 },
  { country: 'Asia', year: 'D', value: 40 },
];

const percentStackedColumn = new PercentStackedColumn('percent_stacked_column_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: percent_stacked_column_data,
  color: chartColors,
  xField: 'year',
  yField: 'value',
  seriesField: 'country',
  maxColumnWidth: 16,
  isPercent: true,
  isStack: true,
  yAxis: {
    label: {
      formatter: (value) => {
        return value * 100 + '%';
      },
    },
    tickCount: 3,
  },
  legend: false,
});

percentStackedColumn.render();
