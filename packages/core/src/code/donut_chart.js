const { Pie: DonutPie } = G2Plot;

const donut_pie_data = [
  { type: 'A', value: 27 },
  { type: 'B', value: 36 },
  { type: 'C', value: 12 },
];

const donutPie = new DonutPie('donut_chart', {
  height: 200,
  width: 200,
  autoFit: false,
  padding: 20,
  data: donut_pie_data,
  angleField: 'value',
  colorField: 'type',
  radius: 1,
  innerRadius: 0.6,
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
  statistic: {
    title: false,
    content: {
      formatter: () => '',
    },
  },
});

donutPie.render();
