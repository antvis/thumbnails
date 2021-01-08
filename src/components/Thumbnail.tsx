import * as React from 'react';

export interface IThumbnailProps {
  alt: string;
  svg: string;
}

export const Thumbnail = (props: IThumbnailProps) => {
  const { alt, svg } = props;

  return <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`} alt={alt} />;
};
