import * as React from 'react';
import Thumbnails, { ThumbnailID } from '@antv/thumbnails';

export interface ThumbnailProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  chart?: ThumbnailID;
  svg?: string;
}

export const Thumbnail = (props: ThumbnailProps) => {
  const { chart, svg, ...otherProps } = props;

  // default no-chart-img
  let src = 'https://gw.alipayobjects.com/zos/antfincdn/lP6YFnCEjy/nochartimg.svg';

  // `svg` overwrites `chart`
  if (svg) {
    src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  } else if (chart) {
    const svgForChart = Thumbnails[chart]?.svgCode;
    if (svgForChart) {
      src = `data:image/svg+xml;utf8,${encodeURIComponent(svgForChart)}`;
    }
  }

  return <img src={src} {...otherProps} />;
};
