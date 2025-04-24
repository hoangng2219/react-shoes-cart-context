import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const Image = ({ src, ...rest }: ImageProps) => {
  return <img {...rest} src={src} />;
};

export default Image;
