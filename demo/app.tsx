import * as React from 'react';

import Thumbnails, { Thumbnail } from '../src';

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
              <Thumbnail alt={name} svg={svgCode} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
