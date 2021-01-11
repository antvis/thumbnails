# AntV/Thumbnails

Thumbnail images for different chart types from [CKB](https://github.com/antvis/AVA/tree/master/packages/knowledge).

<!-- THE PREVIEW PARTS BELOW ARE GENERATED BY SCRIPTS. DON'T TOUCH! -->
<!-- PREVIEW START -->

<div style="display: flex; flex-flow: row wrap;">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/area_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/bar_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/bubble_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/column_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/donut_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/grouped_bar_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/grouped_column_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/heatmap.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/histogram.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/line_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/percent_stacked_area_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/percent_stacked_bar_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/percent_stacked_column_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/pie_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/radar_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/scatter_plot.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/stacked_area_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/stacked_bar_chart.svg" width="180" height="200">
  <img src="https://github.com/antvis/thumbnails/blob/master/svgs/stacked_column_chart.svg" width="180" height="200">
</div>

<!-- PREVIEW END -->

## Usage

### Use as Data in Object

```ts
import Thumbnails from '@antv/thumbnails';

if (Thumbnails.pie_chart) {
  const { id, name, svgCode } = Thumbnails.pie_chart;
  console.log(id, name, svgCode);
}
});
```

```ts
import  { BAR_CHART } from '@antv/thumbnails';

const { id, name, svgCode } = BAR_CHART;
console.log(id, name, svgCode);
```

The ChartIDs are listed in: [AVA/CKB](https://github.com/antvis/AVA/blob/master/packages/knowledge/src/chartID.ts).

### Use as React Component

```tsx
import Thumbnails, { Thumbnail } from '@antv/thumbnails';

// Thumbnail is the React Component
// ...
  <Thumbnail svg={svgCode} />
```

For example:

```tsx
import * as React from 'react';

import Thumbnails, { Thumbnail } from '@antv/thumbnails';

class App extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div className="symbols">
        {Object.keys(Thumbnails).map(chart => {
          const { svgCode, name } = Thumbnails[chart];
          return (
            <div className="symbol-img-container">
              <Thumbnail svg={svgCode} alt={name} width={200} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

```

## Development

```bash
npm install
```

```bash
npm run build
```

```bash
npm run extractsvg
```

```bash
npm run readmepreview
```
