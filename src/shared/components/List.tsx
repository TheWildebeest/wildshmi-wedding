import { PropsWithChildren } from "react";
import { defaultClasses, paragraphSpacing } from "../helpers";

export const List = ({ children }: PropsWithChildren) => {
  return (
    <ul
      className={[...paragraphSpacing, ...defaultClasses].join(" ")}
      style={{ listStyle: "inside square" }}
    >
      {children}
    </ul>
  );
};
