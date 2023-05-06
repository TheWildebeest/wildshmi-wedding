import families from "/public/assets/images/families.jpg";
import fonts from "@/shared/fonts";
import Image from "next/image";

import styles from "./styles.module.css";
import { Text } from "@/shared/components/Text";
import { paragraphSpacing } from "@/shared/helpers";

export default function Root() {
  const { imageWrapper, filter, text } = styles;
  const { arima } = fonts;
  return (
    <>
      <div className={imageWrapper}>
        <div className={text}>
          <div
            className={`${arima} text-white text-xl ${paragraphSpacing.join(
              " "
            )}`}
          >
            <Text tagName="p" size="XL">
              The Wildshmi Wedding
            </Text>
          </div>
          <div
            className={`${arima} text-white text-xl ${paragraphSpacing.join(
              " "
            )}`}
          >
            <Text tagName="p" size="XL">
              Looking for your wedding invite?
            </Text>
          </div>
          <div
            className={`${arima} text-white text-xl ${paragraphSpacing.join(
              " "
            )}`}
          >
            <Text tagName="p" size="L">
              Check the link you were sent, and visit that exact page.
            </Text>
          </div>
        </div>
        <div className={filter}></div>
        <Image
          alt="David and Lakshmi with their families"
          src={families}
        ></Image>
      </div>
    </>
  );
}
