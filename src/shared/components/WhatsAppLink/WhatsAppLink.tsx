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
