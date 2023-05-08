import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";

const { heroImageWrapper, heroImage, heroFilter } = styles;

export interface HeroImageProps {
  src: StaticImageData;
}

export const HeroImage = ({ src }: HeroImageProps) => (
  <div className={heroImageWrapper}>
    <div className={heroFilter}></div>
    <Image
      fill
      priority={true}
      className={heroImage}
      src={src}
      alt="Hero image"
    />
  </div>
);
