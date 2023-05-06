"use client";
import { InfoBox } from "@/shared/components/InfoBox";
import { List } from "@/shared/components/List";
import { Paragraph } from "@/shared/components/Paragraph";
import { Text } from "@/shared/components/Text";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useContext } from "react";
import { InvitationContext } from "@/shared/providers/InvitationContext";
import { EventTypes } from "@/shared/models";

const GiftsPage: FC = () => {
  const basePath = usePathname()?.replace("/gifts", "");
  const eventName = useContext(InvitationContext);

  return (
    <>
      <div className="max-w-[50em] mx-auto">
        <Text tagName="h2" size="L">
          🎩 Etiquette
        </Text>

        <Paragraph>
          We have decided to establish a clear gift-giving etiquette for our
          wedding. This is intended to prevent potential misunderstandings and
          to make things easier for our guests and ourselves.
        </Paragraph>
        <Text tagName="h2" size="M">
          🙏Expectations
        </Text>
        <InfoBox title="Good to know:" type="info">
          Gift giving is entirely optional. Being invited to the wedding does
          not mean you are expected to provide a gift.
        </InfoBox>
        <Paragraph>
          If you RSVP to attend the wedding, the <strong>only</strong>{" "}
          expectation of you is that you will indeed attend (you are also
          welcome to arrange for Sofia Vergara or Matt Damon to attend on your
          behalf). Neither Lakshmi nor David expect to get married multiple
          times, and so this is truly a once-in-a-lifetime experience for them!
        </Paragraph>
        <Paragraph>
          So, come and join us, dance with us, sing with us, take selfies and
          post them with #wildshmi on instagram. Indulge us in experiences that
          become memories, that become stories we hope to recount long into the
          future.
        </Paragraph>
        <Paragraph>
          Some people may feel that they want to contribute a gift as well. We
          have provided some options for you to do so if you wish. Please take a
          look at our gift registry at{" "}
          <Link target="_blank" href="https://www.hitchd.com/wildshmi">
            hitchd.com/wildshmi
          </Link>
          . There is some more information about this{" "}
          <a href="#registry">below</a>.
        </Paragraph>
        <Text tagName="h2" size="M">
          💐 On the day
        </Text>
        <Paragraph>
          If you want to bring a card or gift on the day, you are welcome to,
          but please be aware of the following restrictions:
        </Paragraph>
        <List>
          {eventName === EventTypes.WEDDING && (
            <>
              <li>
                We won&lsquo;t be able to store or retrieve gifts left at
                Fitzrovia Chapel.
              </li>
              <li>
                We will not be able to transport gifts from the chapel to the
                reception venue.
              </li>
            </>
          )}
          <li>We do not expect to open any presents on the day.</li>
          <li>We do not expect to open or read any cards on the day.</li>
        </List>
        <Paragraph>
          To ensure the day goes smoothly, we would also prefer:
        </Paragraph>
        <List>
          <li>
            No large items to be brought to the wedding — we do not have the
            resources to transport large items.
          </li>
          <li>
            No valuable items to be brought to the wedding — we can&lsquo;t make
            any guarantees about security and we don&lsquo;t want to risk losing
            anything.
          </li>

          <li>
            No fragile items to be brought to the wedding — we don&lsquo;t want
            to risk breakages during expected high levels of boisterousness,
            frolicking, and generally rumbunctious goings-on.
          </li>
        </List>
        <Text tagName="h2" size="L">
          <span id="registry">🎁 Gift registry</span>
        </Text>
        <Paragraph>
          We have registered with{" "}
          <Link target="_blank" href="https://www.hitchd.com/wildshmi">
            hitchd.com/wildshmi
          </Link>{" "}
          as an alternative to registering with a store.
        </Paragraph>
        <Paragraph>
          We have built a domestic life together and already have all the
          ameneties and accessories we could want. So, our gift list consists of
          options for you to contribute to:
        </Paragraph>
        <List>
          <li>A &ldquo;first home&rdquo; cash fund</li>
          <li>Honeymoon flights and hotels</li>
          <li>Activities and experiences</li>
          <li>Other little treats</li>
        </List>
        <Paragraph>
          If you would like to give a gift, our preference would be for you to
          do so using this registry.
        </Paragraph>
        <Paragraph>
          If you would prefer to do something different, please{" "}
          <Link href={{ pathname: basePath + "/contact" }}>get in touch</Link>{" "}
          with us.
        </Paragraph>

        <Text></Text>
        <List></List>
      </div>
    </>
  );
};

export default GiftsPage;

// https://openbase.com/js/react-google-forms/documentation#example
