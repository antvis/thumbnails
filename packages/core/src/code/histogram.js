const { Histogram } = G2Plot;

const histogram_data = [
  {
    value: 2,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 3,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 4,
  },
  {
    value: 4,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 5,
  },
  {
    value: 5,
  },
  {
    value: 5,
  },
  {
    value: 5,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 6,
  },
  {
    value: 6,
  },
  {
    value: 6,
  },
  {
    value: 6,
  },
  {
    value: 6,
  },
  {
    value: 6,
  },
  {
    value: 6,
  },
  {
    value: 6,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
  {
    value: 7,
  },
  {
    value: 7,
  },
  {
    value: 7,
  },
  {
    value: 7,
  },
  {
    value: 7,
  },
  {
    value: 7,
  },
  {
    value: 7,
  },
  {
    value: 8,
  },
  {
    value: 8,
  },
  {
    value: 8,
  },
  {
    value: 9,
  },
];

const histogram = new Histogram('histogram', {
  height: 200,
  width: 200,
  autoFit: false,
  data: histogram_data,
  binField: 'value',
  binWidth: 1,
  yAxis: {
    min: 0,
    max: 12,
    tickCount: 3,
  },
});

histogram.render();
