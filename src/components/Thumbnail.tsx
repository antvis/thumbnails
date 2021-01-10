import * as React from 'react';

export interface ThumbnailProps {
  svg: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

export const Thumbnail = (props: ThumbnailProps) => {
  const { svg, ...otherProps } = props;

  const src = svg
    ? `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
    : 'https://gw.alipayobjects.com/zos/antfincdn/lP6YFnCEjy/nochartimg.svg';

  return <img src={src} {...otherProps} />;
};
