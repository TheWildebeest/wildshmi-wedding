import fonts from "@/shared/fonts";
import { InvitationContext } from "@/shared/providers/InvitationContext";
import Link from "next/link";
import React, { useContext } from "react";
import { Text } from "../Text";

export const RsvpButton = () => {
  const RECEPTION_ONLY = "https://forms.gle/LZ4k6ryecr7TTAAX9";
  const CEREMONY_AND_RECEPTION = "https://forms.gle/XiRJzPYkPPZyL5SD6";
  const eventTypeToRSVPFormMap = {
    wedding: CEREMONY_AND_RECEPTION,
    "wedding-reception": RECEPTION_ONLY,
  } as const;
  const eventType = useContext(InvitationContext);
  const { arima } = fonts;

  return (
    <div className="text-center w-100" style={{ marginTop: "1rem" }}>
      <Text tagName="div" size="XL">
        <div>
          <div
            style={{
              display: "flex",
              placeItems: "center",
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
                background: "var(--wildshmi-secondary)",
                boxShadow: "var(--wildshmi-grey) 0 10px 20px -10px",

                borderRadius: "0.5em",
                color: "white",
                textDecoration: "unset",
              }}
              href={eventTypeToRSVPFormMap[eventType]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${arima} font-semibold`}>RSVP</span>
            </Link>
          </div>
        </div>
      </Text>
    </div>
  );
};
