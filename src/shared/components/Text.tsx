import React, { FC, PropsWithChildren } from "react";

type Size =
  | "XXXS"
  | "XXS"
  | "XS"
  | "S"
  | "M"
  | "L"
  | "XL"
  | "XXL"
  | "XXXL"
  | "XXXXL";

interface Props extends PropsWithChildren {
  tagName?: keyof HTMLElementTagNameMap;
  size?: Size;
}

const defaultClasses = ["w-100", "my-1"];

const XXXS = [
  // Font size
  "text-3xs",
  "sm:text-2xs",
  "md:text-xs",
  "lg:text-sm",
  "xl:text-base",
];

const XXS = [
  // Font size
  "text-2xs",
  "sm:text-xs",
  "md:text-sm",
  "lg:text-base",
  "xl:text-lg",
];

const XS = [
  // Font size
  "text-xs",
  "sm:text-sm",
  "md:text-base",
  "lg:text-lg",
  "xl:text-xl",
];

const S = [
  // Font size
  "text-sm",
  "sm:text-base",
  "md:text-lg",
  "lg:text-xl",
  "xl:text-2xl",
  //  Vertical margin
];

const M = [
  // Font size
  "text-base",
  "sm:text-lg",
  "md:text-xl",
  "lg:text-2xl",
  "xl:text-3xl",
  //  Vertical margin
];

const L = [
  // Font size
  "text-lg",
  "sm:text-xl",
  "md:text-2xl",
  "lg:text-3xl",
  "xl:text-4xl",
  //  Vertical margin
  "my-2",
];

const XL = [
  // Font size
  "text-xl",
  "sm:text-2xl",
  "md:text-3xl",
  "lg:text-4xl",
  "xl:text-5xl",
  //  Vertical margin
  "my-3",
];

const XXL = [
  // Font size
  "text-2xl",
  "sm:text-3xl",
  "md:text-4xl",
  "lg:text-5xl",
  "xl:text-6xl",
  //  Vertical margin
  "my-4",
];

const XXXL = [
  // Font size
  "text-3xl",
  "sm:text-4xl",
  "md:text-5xl",
  "lg:text-6xl",
  "xl:text-7xl",
  //  Vertical margin
  "my-4",
];

const XXXXL = [
  // Font size
  "text-4xl",
  "sm:text-5xl",
  "md:text-6xl",
  "lg:text-7xl",
  "xl:text-8xl",
  //  Vertical margin
  "my-5",
];

export const Text: FC<Props> = ({
  tagName = "div",
  size = "XS",
  children,
}: Props) => {
  const classNames: Record<Size, string[]> = {
    XXXS,
    XXS,
    XS,
    S,
    M,
    L,
    XL,
    XXL,
    XXXL,
    XXXXL,
  };

  const Element = tagName;
  return (
    <Element className={defaultClasses.concat(classNames[size]).join(" ")}>
      {children}
    </Element>
  );
};
