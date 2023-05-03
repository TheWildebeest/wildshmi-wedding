"use client";
import { Paragraph } from "@/shared/components/Paragraph";
import { Timeline } from "@/shared/components/Timeline";
import React, { FC } from "react";

import bed from "public/assets/images/timeline/bed.png";
import camera from "public/assets/images/timeline/camera.png";
import rings from "public/assets/images/timeline/rings.png";
import plate from "public/assets/images/timeline/plate.png";
import karaoke from "public/assets/images/timeline/karaoke.png";
import bus from "public/assets/images/timeline/bus.png";
import speech from "public/assets/images/timeline/speech.png";
import couple from "public/assets/images/timeline/couple.png";
import champagne from "public/assets/images/timeline/champagne.png";
import placeholder from "public/assets/images/timeline/placeholder.webp";
import { InvitationContext } from "@/shared/providers/InvitationContext";
import { useContext } from "react";

const AM = [
  {
    time: "10:30",
    title: "Guests arrive",
    image: placeholder,
  },
  {
    time: "11:00",
    title: "“I do”s",
    image: rings,
  },
  {
    time: "12:00",
    title: "Bus to reception",
    image: bus,
  },
  {
    time: "14:00",
    title: "Photos",
    image: camera,
  },
  {
    time: "15:00",
    title: "Wedding Breakfast",
    image: plate,
  },
  {
    time: "16:00",
    title: "Speeches",
    image: speech,
  },
];
const PM = [
  {
    time: "17:00",
    title: "Evening guests arrive",
    image: champagne,
  },
  {
    time: "18:00",
    title: "Live karaoke",
    image: karaoke,
  },
  {
    time: "19:00",
    title: "First dance",
    image: couple,
  },
  {
    time: "00:00",
    title: "Farewell",
    image: bed,
  },
];

const timelineEntries = {
  wedding: AM.concat(PM),
  "wedding-reception": PM,
};

const OurBigDayPage: FC = () => {
  const eventName = useContext(InvitationContext);
  console.log(eventName);
  return (
    <div className="max-w-[50em] mx-auto">
      <Paragraph>
        Here&lsquo;s a timeline so you know what to expect on the day!
      </Paragraph>
      <Timeline items={timelineEntries[eventName]}></Timeline>
    </div>
  );
};

export default OurBigDayPage;
