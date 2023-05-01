"use client";
import Invitation from "@/shared/components/client/Invitation";
import { Text } from "@/shared/components/Text";
import { FC } from "react";
import Image from "next/image";
import floralarrangement from "../../../public/assets/images/floral-arrangement.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import fonts from "@/shared/fonts";

const WeddingPage: FC = () => {
  const basePath = usePathname();
  const { arima } = fonts;
  return (
    <>
      <Invitation></Invitation>
      <div className="text-center w-100" style={{ marginTop: "1rem" }}>
        <Text tagName="div" size="XL">
          <div
            style={{
              margin: "0 auto",
              // objectPosition: 'center center',
              objectFit: "cover",
              width: "10em",
              position: "relative",
            }}
          >
            <Image
              src={floralarrangement}
              alt="Picture of a rose"
              style={{
                // margin: '0 auto',
                // objectPosition: 'center center',
                objectFit: "cover",
                width: "10em",
                filter: "drop-shadow(0px 0px 3px grey)",
              }}
            />
            <div
              style={{
                display: "flex",
                placeItems: "center",
                position: "absolute",
                height: "2em",
                top: "30%",
                left: "0",
                right: "0",
                bottom: "0",
                color: "white",
              }}
            >
              <Link
                style={{
                  padding: "2% 0",
                  margin: "0 auto",
                  width: "30%",
                  height: "max-content",
                  background: "rgba(0, 0, 0, 0.5)",
                  border: "3px solid white",
                  color: "white",
                  textDecoration: "unset",
                }}
                href={{ pathname: basePath + "/rsvp" }}
              >
                <span className={arima}>RSVP</span>
              </Link>
            </div>
          </div>
        </Text>
      </div>
    </>
  );
};

export default WeddingPage;
