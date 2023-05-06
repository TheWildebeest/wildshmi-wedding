import { PropsWithChildren } from "react";
import { Paragraph } from "../Paragraph";

export interface InfoBoxProps extends PropsWithChildren {
  title: string;
  type: "info" | "warning";
}

const bgClassesMap = {
  info: "bg-sky-100",
  warning: "bg-orange-100",
  error: "bg-red-100",
} as const;

const emojiMap = {
  info: "ℹ️",
  warning: "⚠️",
  error: "❌",
} as const;

export const InfoBox = ({ title, type = "info", children }: InfoBoxProps) => (
  <Paragraph
    className={`text-xs lg:text-sm xl:text-lg border-slate-700 border-dotted border-2 p-2 ${bgClassesMap[type]}`}
  >
    {emojiMap[type]} <strong>{title}</strong> {children}
  </Paragraph>
);
