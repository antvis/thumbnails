const { Scatter } = G2Plot; // REQUIRED: import from G2Plot

const scatter_data = [
  { HA: 'A', Team: 'Torino', xGconceded: 3, Shotconceded: 90, Result: '3' },
  { HA: 'H', Team: 'Atalanta', xGconceded: 3.8, Shotconceded: 190, Result: '1' },
  { HA: 'A', Team: 'Milan', xGconceded: 4.3, Shotconceded: 130, Result: '0' },
  { HA: 'H', Team: 'Chievo', xGconceded: 5.7, Shotconceded: 180, Result: '1' },
  { HA: 'A', Team: 'Bologna', xGconceded: 6, Shotconceded: 240, Result: 0 },
  { HA: 'H', Team: 'Frosinone', xGconceded: 7, Shotconceded: 200, Result: '3' },
  { HA: 'H', Team: 'Lazio', xGconceded: 8, Shotconceded: 120, Result: '3' },
  { HA: 'A', Team: 'Empoli', xGconceded: 9, Shotconceded: 210, Result: '3' },
];

const scatterPlot = new Scatter('scatter_plot', {
  height: 200,
  width: 200,
  autoFit: false,
  data: scatter_data,
  xField: 'xGconceded',
  yField: 'Shotconceded',
  pointStyle: {
    fill: '#5B8FF9',
  },
  size: 6,
  xAxis: {
    min: 2,
    max: 10,
  },
  yAxis: {
    min: 0,
    max: 300,
  },
  animation: false, // REQUIRED: NO animation
  renderer: 'svg', // REQUIRED: render into svg
});

scatterPlot.render();
