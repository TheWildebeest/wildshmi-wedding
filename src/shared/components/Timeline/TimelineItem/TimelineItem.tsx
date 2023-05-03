import Image from "next/image";
import { TimelineEntry } from "../Timeline";
import { Layout } from "../utils";

const FlexDirection = {
  [Layout.normal]: "row",
  [Layout.reverse]: "row-reverse",
} as const;

export interface TimelineItemProps {
  layout: (typeof Layout)["normal" | "reverse"];
  item: TimelineEntry;
}

export const TimelineItem = ({ layout, item }: TimelineItemProps) => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "100%",
        height: "5em",
        display: "flex",
        flexDirection: FlexDirection[layout],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ flex: "0 0 7em" }}>
        {item.time}
        <br />
        {item.title}
      </div>
      <div
        style={{
          flex: "0 0 0",
          margin: "0 1em",
          width: "0",
          padding: "0 0.05em",
          height: "5em",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            // width: "0",
            // height: "0",
            padding: "0.04em 0.3em",
            backgroundColor: "black",
          }}
        ></div>
      </div>
      <div style={{ flex: "0 0 7em", padding: "1em" }}>
        <Image className="w-full" src={item.image} alt={item.title} />
      </div>
    </div>
  );
};
