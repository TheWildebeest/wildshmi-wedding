"use client";
import { Text } from "@/shared/components/Text";
import { EventNames } from "@/shared/models";
import { InvitationContext } from "@/shared/providers/InvitationContext";
import { useContext } from "react";
import fonts from "@/shared/fonts";
import Link from "next/link";

export const ThankYou = () => {
  const { arima } = fonts;
  const eventName = EventNames[useContext(InvitationContext)];
  // const res: Response = use(fetch("http://localhost:3000/api/invitation"));
  // const data: Data = use(res.json());
  // console.log('Fetched data: ', data.url)
  // const alignText = eventName === "Wedding" ? "left" : "center";
  return (
    <>
      <div className={"text-center font-light " + arima}>
        <Text tagName="div" size="XXXL">
          Thank you
        </Text>
        <Text tagName="div" size="M">
          <span className="font-normal">
            for joining David{" "}
            <strong style={{ color: "var(--wildshmi-primary)" }}>&</strong>{" "}
            Lakshmi
          </span>
        </Text>
        <Text tagName="div" size="M">
          at their {eventName} on
        </Text>
        <Text tagName="div" size="M">
          <div
            style={{
              fontWeight: "bold",
              color: "var(--wildshmi-secondary)",
              margin: "0.5rem 0",
            }}
          >
            26.08.2023
          </div>
        </Text>
        <Text size="M">
          📸
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://louisegoodeyphotography.pic-time.com/NtQPrYzAZYa3p"
          >
            <strong>Official wedding photos</strong>
          </Link>
        </Text>
        <Text size="M">
          📽️
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtu.be/UUdIFuyJMxk"
          >
            <strong>Official wedding video</strong>
          </Link>
        </Text>
      </div>
    </>
  );
};
