import { Text } from "../Text";
import whatsappiconwhite from "public/assets/images/icons/whatsapp-white.svg";
import whatsappiconblack from "public/assets/images/icons/whatsapp-black.svg";
import { Icon } from "../Icon";

export interface WhatsAppLinkProps {
  name: string;
  phoneNumber: string;
  color?: "white" | "black";
}

const iconThemeMap = {
  white: whatsappiconwhite,
  black: whatsappiconblack,
} as const;

const bgColorMap = {
  white: "rgba(0, 0, 0, 0.25)",
  black: "white",
};

export const WhatsAppLink = ({
  phoneNumber,
  name,
  color,
}: WhatsAppLinkProps) => {
  const formattedPhoneNumber = phoneNumber
    .split("")
    .join("")
    .replace(/\D/g, "");
  const messageMeText = `Message ${name} on WhatsApp`;
  const uriEncodedText = encodeURIComponent(
    `Hi ${name}! I'm getting in touch about the wedding.`
  );
  const href = `https://wa.me/${formattedPhoneNumber}?text=${uriEncodedText}`;
  return (
    <Text tagName="span" size="XS">
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          color: color,
          textDecoration: "none",
          paddingRight: "0.4em",
        }}
        aria-label={messageMeText}
        href={href}
      >
        <Icon
          src={iconThemeMap[color || "black"]}
          altText={messageMeText}
        ></Icon>
        {`Chat with ${name}`}
      </a>
    </Text>
  );
};

export interface ChatWithMeProps {
  color: "black" | "white";
  name: string;
  phoneNumber: string;
}

const ChatWithMe = ({ color, name, phoneNumber }: ChatWithMeProps) => (
  <div
    style={{
      display: "inline-block",
      border: `2px solid ${color}`,
      borderRadius: "0.3em",
      backgroundColor: bgColorMap[color],
      margin: "0.2em",
    }}
  >
    <WhatsAppLink
      name={name}
      color={color}
      phoneNumber={phoneNumber}
    ></WhatsAppLink>
  </div>
);

export interface ColorProps {
  color: "black" | "white";
}

export const ChatWithDavid = ({ color }: ColorProps) => (
  <ChatWithMe
    color={color}
    name="David"
    phoneNumber="+44 (0)7890 346 023"
  ></ChatWithMe>
);

export const ChatWithLakshmi = ({ color }: ColorProps) => (
  <ChatWithMe
    name="Lakshmi"
    color={color}
    phoneNumber="+44 (0) 7308 574 871"
  ></ChatWithMe>
);
