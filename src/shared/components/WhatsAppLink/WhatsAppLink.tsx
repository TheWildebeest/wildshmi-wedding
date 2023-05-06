import { Text } from "../Text";
import whatsappicon from "public/assets/images/icons/whatsapp.svg";
import { Icon } from "../Icon";

export interface WhatsAppLinkProps {
  name: string;
  phoneNumber: string;
}

export const WhatsAppLink = ({ phoneNumber, name }: WhatsAppLinkProps) => {
  const formattedPhoneNumber = phoneNumber
    .split("")
    .join("")
    .replace(/\D/g, "");
  const messageMeText = `Message ${name} on WhatsApp`;
  const uriEncodedText = encodeURIComponent(
    `Hello, it's ${name} here! Feel free to get in touch about the wedding.`
  );
  const href = `https://wa.me/${formattedPhoneNumber}?text=${uriEncodedText}`;
  return (
    <Text tagName="span" size="XS">
      <a
        style={{ color: "black", textDecoration: "none" }}
        aria-label={messageMeText}
        href={href}
      >
        <Icon src={whatsappicon} altText={messageMeText}></Icon>
        {phoneNumber}
      </a>
    </Text>
  );
};
