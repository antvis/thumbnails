const { Heatmap } = G2Plot;

const heatmap_data = [
  { name: '4', year: 'A', rain: 0 },
  { name: '4', year: 'B', rain: 80 },
  { name: '4', year: 'C', rain: 80 },
  { name: '4', year: 'D', rain: 80 },
  { name: '5', year: 'A', rain: 80 },
  { name: '5', year: 'B', rain: 10 },
  { name: '5', year: 'C', rain: 80 },
  { name: '5', year: 'D', rain: 80 },
  { name: '6', year: 'A', rain: 30 },
  { name: '6', year: 'B', rain: 100 },
  { name: '6', year: 'C', rain: 60 },
  { name: '6', year: 'D', rain: 60 },
  { name: '7', year: 'A', rain: 100 },
  { name: '7', year: 'B', rain: 80 },
  { name: '7', year: 'C', rain: 60 },
  { name: '7', year: 'D', rain: 80 },
  { name: '8', year: 'A', rain: 100 },
  { name: '8', year: 'B', rain: 10 },
  { name: '8', year: 'C', rain: 80 },
  { name: '8', year: 'D', rain: 10 },
  { name: '9', year: 'A', rain: 60 },
  { name: '9', year: 'B', rain: 80 },
  { name: '9', year: 'C', rain: 60 },
  { name: '9', year: 'D', rain: 30 },
  { name: '10', year: 'A', rain: 80 },
  { name: '10', year: 'B', rain: 10 },
  { name: '10', year: 'C', rain: 10 },
  { name: '10', year: 'D', rain: 80 },
];

const heatmap = new Heatmap('heatmap', {
  height: 200,
  width: 200,
  autoFit: false,
  data: heatmap_data,
  isStack: true,
  padding: 20,
  xField: 'year',
  yField: 'name',
  colorField: 'rain',
  color: ['#436FD4', '#5B8FF9', '#87B3FF', '#B0D0FF', '#D9E9FF'],
  label: null,
  legend: false,
  areaStyle: {
    fillOpacity: 0.7,
  },
  heatmapStyle: {
    stroke: '#fff',
    lineWidth: 4,
  },
});

heatmap.render();
