import Image from 'next/image';
import styles from './styles.module.css'
import hero from "/public/assets/images/david-and-lakshmi-1.jpg"

const { heroImageWrapper, heroImage, heroFilter } = styles;

export const HeroImage = () => (

  <div className={heroImageWrapper}>
    <div className={heroFilter}></div>
      <Image
        priority
        className={heroImage}
        src={hero}
        alt="hero image example"
      />
  </div>
)
