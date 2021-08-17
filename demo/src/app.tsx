import * as React from 'react';
import Thumbnails, { BAR_CHART } from '../../packages/core/src';
import { Thumbnail } from '../../packages/ui/src';

class App extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <>
        <code>{'<Thumbnail svg={svgCode} alt={name} width={200} />'}</code>
        <div className="symbols">
          {Object.keys(Thumbnails).map((chart) => {
            // @ts-ignore
            const { svgCode, name } = Thumbnails[chart];
            return (
              <div className="symbol-img-container" key={chart}>
                <Thumbnail svg={svgCode} alt={name} width={200} height={200} />
              </div>
            );
          })}
        </div>

        <br />

        <code>{'<Thumbnail chart="area_chart" alt="area" width={200} />'}</code>
        <div className="symbol-img-container">
          <Thumbnail chart="area_chart" alt="area" width={200} />
        </div>

        <br />

        <code>{'<Thumbnail svg={BAR_CHART.svgCode} alt="bar" width={200} />'}</code>
        <div className="symbol-img-container">
          {console.log(BAR_CHART.svgCode)}
          <Thumbnail svg={BAR_CHART.svgCode} alt="bar" width={200} />
        </div>
      </>
    );
  }
}

export default App;
