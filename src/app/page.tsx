import families from "/public/assets/images/families.jpg";
import fonts from "@/shared/fonts";
import Image from "next/image";

import styles from "./styles.module.css";
import { Text } from "@/shared/components/Text";
import { paragraphSpacing } from "@/shared/helpers";
import { WhatsAppLink } from "@/shared/components/WhatsAppLink";
import { PropsWithChildren } from "react";

export default function Root() {
  const { imageWrapper, filter, text } = styles;
  const { arima } = fonts;

  const ChatWithMe = ({ children }: PropsWithChildren) => (
    <div
      style={{
        border: "2px solid white",
        borderRadius: "0.3em",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        margin: "0.2em",
      }}
    >
      {children}
    </div>
  );
  const ChatWithDavid = () => (
    <ChatWithMe>
      <WhatsAppLink
        name="David"
        color="white"
        phoneNumber="+44 (0) 7890 346 023"
      ></WhatsAppLink>{" "}
    </ChatWithMe>
  );

  const ChatWithLakshmi = () => (
    <ChatWithMe>
      <WhatsAppLink
        name="Lakshmi"
        color="white"
        phoneNumber="+44 (0) 7308 574 871"
      ></WhatsAppLink>
    </ChatWithMe>
  );
  return (
    <div className="relative">
      <div className={imageWrapper}>
        <div className={filter}></div>

        <Image
          priority={true}
          style={{
            objectPosition: "35% center",
          }}
          className="h-screen object-cover w-screen"
          alt="David and Lakshmi with their families"
          src={families}
        ></Image>
      </div>
      <div className={`${text} absolute inset-0`}>
        <header>
          <div
            className={`${arima} text-white text-xl ${paragraphSpacing.join(
              " "
            )}`}
          >
            <Text tagName="h1" size="XXXXL">
              <span className={`${arima} font-normal`}>
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
            <div
              className={`${arima} text-white text-xl ${paragraphSpacing.join(
                " "
              )}`}
            >
              <Text tagName="div" size="M">
                <div className="flex flex-row justify-start align-middle flex-wrap">
                  <ChatWithDavid />
                  <ChatWithLakshmi />
                </div>
              </Text>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
