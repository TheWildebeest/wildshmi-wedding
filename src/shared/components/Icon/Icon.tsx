import Image, { StaticImageData } from "next/image";

export interface IconProps {
  src: StaticImageData;
  altText: string;
}

const Icon = ({ src, altText }: IconProps) => {
  return (
    <Image
      style={{
        display: "inline-block",
        width: "1em",
        margin: "0 0.4em 0.2em 0.6em",
        verticalAlign: "middle",
      }}
      src={src}
      alt={altText}
    />
  );
};
export { Icon };
