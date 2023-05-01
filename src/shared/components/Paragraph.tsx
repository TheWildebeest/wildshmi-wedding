import React, { FC, PropsWithChildren } from "react";
import { paragraphSpacing } from "@/shared/helpers";

interface Props extends PropsWithChildren {
  className?: HTMLParagraphElement["className"];
}

const defaultClasses = [
  ...paragraphSpacing,
  "font-light",
  "text-sm",
  "lg:text-lg",
  "xl:text-xl",
];

export const Paragraph: FC<Props> = ({ children, className = "" }: Props) => {
  return (
    <p className={defaultClasses.join(" ").concat(" " + className)}>
      {children}
    </p>
  );
};
