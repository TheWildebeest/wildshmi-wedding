import families from "/public/assets/images/families.jpg";
import fonts from "@/shared/fonts";
import Image from "next/image";

import styles from "./styles.module.css";
import { Text } from "@/shared/components/Text";
import { paragraphSpacing } from "@/shared/helpers";

export default function Root() {
  const { imageWrapper, filter, text } = styles;
  const { arima, annissaScript } = fonts;
  return (
    <>
      <div className={imageWrapper}>
        <div className={text}>
          <header>
            <div
              className={`${arima} text-white text-xl ${paragraphSpacing.join(
                " "
              )}`}
            >
              <Text tagName="p" size="XXXXL">
                <span className={`${annissaScript} font-thin`}>
                  The Wildshmi Wedding
                </span>
              </Text>
            </div>
          </header>
          <main>
            <div
              className={`${arima} text-white text-xl ${paragraphSpacing.join(
                " "
              )}`}
            >
              <Text tagName="p" size="XXL">
                Looking for your wedding invite?
              </Text>
            </div>
            <br />
            <div
              className={`${arima} text-white text-xl ${paragraphSpacing.join(
                " "
              )}`}
            >
              <Text tagName="p" size="L">
                Check the link you were sent, and visit that exact page.
              </Text>
            </div>
            <div
              className={`${arima} text-white text-xl ${paragraphSpacing.join(
                " "
              )}`}
            >
              <Text tagName="p" size="S">
                Drop us a line on{" "}
                <a
                  style={{ color: "var(--wildshmi-secondary)" }}
                  href="mailto:wildshmi@gmail.com"
                >
                  wildshmi@gmail.com
                </a>{" "}
                if you need a hand.
              </Text>
            </div>
          </main>
        </div>
        <div className={filter}></div>
        <Image
          style={{
            objectPosition: "35% center",
          }}
          className="h-screen object-cover w-auto"
          alt="David and Lakshmi with their families"
          src={families}
        ></Image>
      </div>
    </>
  );
}
