"use client";
import { Icon } from "@/shared/components/Icon";
import { Paragraph } from "@/shared/components/Paragraph";
import { Text } from "@/shared/components/Text";
import { WhatsAppLink } from "@/shared/components/WhatsAppLink";
import { paragraphSpacing } from "@/shared/helpers";
import email from "public/assets/images/icons/email.png";

import React, { FC, useState } from "react";

const ContactPage: FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const copyEmailAddressToClipboard = () => {
    navigator.clipboard.writeText("wildshmi@gmail.com");
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 4000);
  };
  return (
    <>
      <div>
        <Text tagName="h2" size="L">
          📡 Get in touch
        </Text>
        <Paragraph>
          Do please get in touch if you have any questions or comments!
        </Paragraph>
        <Paragraph>
          WhatsApp is the best way to get hold of David and Lakshmi.
        </Paragraph>
        <Paragraph>
          There is also a dedicated wedding email address for contacting the
          couple.
        </Paragraph>
        <article>
          <Text tagName="h3" size="M">
            👨🏼👩🏾 Email the couple
          </Text>
          <Text tagName="div" size="XS">
            <p className={paragraphSpacing.join(" ")}>
              <button
                disabled={showConfirmation}
                style={{ color: "black", textDecoration: "none" }}
                aria-label="Email us"
                onClick={copyEmailAddressToClipboard}
              >
                <Icon src={email} altText="email"></Icon>
                {!showConfirmation && <>wildshmi@gmail.com</>}
                {showConfirmation && (
                  <span
                    className="fade bg-green-200"
                    style={{
                      borderRadius: "0.3em",
                      padding: "0 0.4rem",
                    }}
                  >
                    Copied to clipboard!
                  </span>
                )}
              </button>
            </p>
          </Text>
        </article>
        <article>
          <Text tagName="p" size="M">
            👨🏼 Message David
          </Text>
          <p className={paragraphSpacing.join(" ")}>
            <WhatsAppLink
              name="David"
              phoneNumber="+44 (0)7890 346 023"
            ></WhatsAppLink>
          </p>
        </article>
        <article>
          <Text tagName="p" size="M">
            👩🏾 Message Lakshmi
          </Text>
          <p className={paragraphSpacing.join(" ")}>
            <WhatsAppLink
              name="Lakshmi"
              phoneNumber="+44 (0)7308 574 871"
            ></WhatsAppLink>
          </p>
        </article>
      </div>
    </>
  );
};

export default ContactPage;

// https://openbase.com/js/react-google-forms/documentation#example
