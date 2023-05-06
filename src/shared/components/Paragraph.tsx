import React, { FC, PropsWithChildren } from "react";
import { paragraphSpacing, defaultClasses } from "@/shared/helpers";

interface Props extends PropsWithChildren {
  className?: HTMLParagraphElement["className"];
}

export const Paragraph: FC<Props> = ({ children, className = "" }: Props) => {
  return (
    <p
      className={[...paragraphSpacing, ...defaultClasses]
        .join(" ")
        .concat(" " + className)}
    >
      {children}
    </p>
  );
};
