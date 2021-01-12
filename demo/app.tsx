import * as React from 'react';
import Thumbnails, { Thumbnail, BAR_CHART } from '../src';

class App extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <>
        <code>{`<Thumbnail svg={svgCode} alt={name} width={200} />`}</code>
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

        <br />

        <code>{`<Thumbnail chart={'pie_chart'} alt={'pie'} width={200} />`}</code>
        <div className="symbol-img-container">
          <Thumbnail chart={'pie_chart'} alt={'pie'} width={200} />
        </div>

        <code>{`<Thumbnail svg={BAR_CHART.svgCode} alt={'pie'} width={200} />`}</code>
        <div className="symbol-img-container">
          <Thumbnail svg={BAR_CHART.svgCode} alt={'pie'} width={200} />
        </div>
      </>
    );
  }
}

export default App;
