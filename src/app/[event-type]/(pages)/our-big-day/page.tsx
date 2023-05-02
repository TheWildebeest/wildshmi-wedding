import { Paragraph } from "@/shared/components/Paragraph";
import { Timeline } from "@/shared/components/timeline";
import React, { FC } from "react";

const OurBigDayPage: FC = () => {
  return (
    <div className="max-w-[50em] mx-auto">
      <Paragraph>
        Here&lsquo;s a timeline so you know what to expect on the day!
      </Paragraph>
      <Timeline></Timeline>
    </div>
  );
};

export default OurBigDayPage;
