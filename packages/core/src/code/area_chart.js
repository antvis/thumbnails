const { Area } = G2Plot;

const area_data = [
  { year: 2016, value: 150 },
  { year: 2017, value: 90 },
  { year: 2018, value: 180 },
  { year: 2019, value: 170 },
  { year: 2020, value: 240 },
];

const area = new Area('area_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  data: area_data,
  xField: 'year',
  yField: 'value',
  padding: [10, 20, 20, 40],
  xAxis: {
    range: [0, 1],
    label: {
      style: {
        fontSize: 12,
      },
      offset: 4,
    },
  },
  yAxis: {
    tickInterval: 100,
    label: {
      style: {
        fontSize: 12,
      },
    },
  },
  renderer: 'svg',
});

area.render();
