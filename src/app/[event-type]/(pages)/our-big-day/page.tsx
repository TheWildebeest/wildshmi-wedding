"use client";
import { Timeline } from "@/shared/components/Timeline";
import React, { FC } from "react";

import church from "public/assets/images/icons/church.png";
import bed from "public/assets/images/icons/bed.png";
import camera from "public/assets/images/icons/camera.png";
import rings from "public/assets/images/icons/rings.png";
import plate from "public/assets/images/icons/plate.png";
import karaoke from "public/assets/images/icons/karaoke.png";
import bus from "public/assets/images/icons/bus.png";
import speech from "public/assets/images/icons/speech.png";
import couple from "public/assets/images/icons/couple.png";
import champagne from "public/assets/images/icons/champagne.png";
import cake from "public/assets/images/icons/cake.png";
import dancing from "public/assets/images/icons/dancing.png";
import { InvitationContext } from "@/shared/providers/InvitationContext";
import { useContext } from "react";
import { Text } from "@/shared/components/Text";
import Link from "next/link";
import { paragraphSpacing } from "@/shared/helpers";
import { Paragraph } from "@/shared/components/Paragraph";
import { List } from "@/shared/components/List";

const AM = [
  {
    time: "10:00",
    title: "Guests arrive",
    image: church,
  },
  {
    time: "11:00",
    title: "Ceremony",
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
    time: "18:30",
    title: "Evening guests arrive",
    image: champagne,
  },
  {
    time: "19:30",
    title: "Cut the cake",
    image: cake,
  },
  {
    time: "20:00",
    title: "Live karaoke",
    image: karaoke,
  },
  {
    time: "21:00",
    title: "First dance",
    image: couple,
  },
  {
    time: "21:30",
    title: "More karaoke",
    image: karaoke,
  },
  {
    time: "22:00",
    title: "Sangeet",
    image: dancing,
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

const FitzroviaChapel = () => (
  <section className={paragraphSpacing.join(" ")}>
    <Text tagName="h2" size="XS">
      <strong>Ceremony: </strong>{" "}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://goo.gl/maps/JC2rXo9eLz5q6Smr8"
      >
        Fitzrovia Chapel
      </Link>
      <br />
      Fitzroy Place, 2 Pearson Square, London W1T 3BF
    </Text>
  </section>
);

const GreenwichYachtClub = () => (
  <section className={paragraphSpacing.join(" ")}>
    <Text tagName="h2" size="XS">
      <strong>Evening Reception: </strong>{" "}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://goo.gl/maps/WUkdwsjPFXmUj6Cj7"
      >
        Greenwich Yacht Club
      </Link>
      <br />1 Pear Tree Way, Greenwich, London SE10 0BW
    </Text>
  </section>
);

const VenueDetails = {
  "wedding-reception": <GreenwichYachtClub />,
  wedding: (
    <>
      <FitzroviaChapel />
      <GreenwichYachtClub />
    </>
  ),
};

const OurBigDayPage: FC = () => {
  const eventName = useContext(InvitationContext);
  console.log(eventName);
  return (
    <div className="max-w-[50em] mx-auto">
      <Text tagName="h2" size="L">
        💒 Venue
      </Text>
      {VenueDetails[eventName]}
      <Text tagName="h2" size="L">
        🎩 Dress code
      </Text>
      <Paragraph>
        Our dress code is flexible, please choose what you feel most comfortable
        with from:
      </Paragraph>
      <List>
        <li>Black tie (tuxedo / cocktail dress)</li>
        <li>Formal wear (lounge suit / dress)</li>
        <li>Indian traditional (kurta, sari etc.)</li>
      </List>
      <Text tagName="h2" size="L">
        🕰️ Timeline
      </Text>
      <Timeline items={timelineEntries[eventName]}></Timeline>
    </div>
  );
};

export default OurBigDayPage;
