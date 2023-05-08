"use client";
import Invitation from "@/shared/components/client/Invitation";
import { Text } from "@/shared/components/Text";
import { FC } from "react";
import Image from "next/image";
import floralarrangement from "../../../public/assets/images/floral-arrangement.png";
import { RsvpButton } from "@/shared/components/RSVPButton";

const WeddingPage: FC = () => {
  return (
    <>
      <Invitation></Invitation>
      <RsvpButton></RsvpButton>

      <div className="text-center w-100" style={{ marginTop: "1rem" }}>
        <Text tagName="div" size="XL">
          <div
            style={{
              margin: "0 auto",
              objectFit: "cover",
              width: "10em",
              position: "relative",
            }}
          >
            <Image
              priority={true}
              src={floralarrangement}
              alt="Picture of a rose"
              style={{
                objectFit: "cover",
                width: "10em",
              }}
            />
          </div>
        </Text>
      </div>
    </>
  );
};

export default WeddingPage;
