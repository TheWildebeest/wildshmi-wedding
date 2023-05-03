import { TimelineItem } from "./TimelineItem";
import { Layout } from "./utils";

import { StaticImageData } from "next/dist/client/image";

export interface TimelineEntry {
  time: string;
  title: string;
  image: StaticImageData;
}

export const Timeline = ({ items }: { items: TimelineEntry[] }) => {
  const { normal, reverse } = Layout;
  return (
    <>
      <div className="text-center my-6 md:my-12 lg:my-20 text-sm md:text-base lg:text-xl uppercase">
        {items.map((item, index) => (
          <TimelineItem
            key={item.time}
            layout={index % 2 ? reverse : normal}
            item={item}
          />
        ))}
      </div>
    </>
  );
};
export { Layout };
