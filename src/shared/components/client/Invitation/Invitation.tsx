"use client";
import { Text } from "@/shared/components/Text";
import { EventNames } from "@/shared/models";
import { InvitationContext } from "@/shared/providers/InvitationContext";
import { useContext } from "react";
import fonts from "@/shared/fonts";

export const Invitation = () => {
  const { arima } = fonts;
  const eventName = EventNames[useContext(InvitationContext)];
  // const res: Response = use(fetch("http://localhost:3000/api/invitation"));
  // const data: Data = use(res.json());
  // console.log('Fetched data: ', data.url)
  const alignText = eventName === "Wedding" ? "left" : "center";
  return (
    <div className={"text-center font-light " + arima}>
      {/* <Text tagName="div" size="XXXL">
        <div className="flex justify-center items-center">
          <div className="w-1/4 text-right">David</div>
          <div className="text-center h-100 w-[20%]">
            <Image
              alt="Interlocking rings"
              style={{
                verticalAlign: "middle",
                height: "2ch",
                display: "inline-block",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                objectFit: "contain",
                objectPosition: "center",
              }}
              src={rings}
            ></Image>
          </div>
          <div className="w-1/4 text-left">Lakshmi</div>
        </div>
      </Text> */}
      <Text tagName="div" size="M">
        You are warmly invited to join
      </Text>
      <Text tagName="div" size="XXXL">
        <span className="font-normal">
          David <strong style={{ color: "var(--wildshmi-primary)" }}>&</strong>{" "}
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
            marginTop: "1.5rem",
          }}
        >
          26.08.2023
        </div>
      </Text>
      <div className="flex justify-center mt-[1rem]">
        {eventName === "Wedding" && (
          <div className="w-1/3 text-right">
            <Text tagName="div" size="XS">
              Fitzrovia Chapel
            </Text>
          </div>
        )}
        {eventName === "Wedding" && (
          <Text tagName="div" size="S">
            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
          </Text>
        )}
        <div className={`w-1/3 text-${alignText}`}>
          <Text tagName="div" size="XS">
            Greenwich Yacht Club
          </Text>
        </div>
      </div>
    </div>
  );
};
