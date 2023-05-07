"use client";
import { InfoBox } from "@/shared/components/InfoBox";
import { List } from "@/shared/components/List";
import { Paragraph } from "@/shared/components/Paragraph";
import { Text } from "@/shared/components/Text";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const GiftsPage: FC = () => {
  const basePath = usePathname()?.replace("/gifts", "");

  return (
    <>
      <div className="max-w-[50em] mx-auto">
        <Text tagName="h2" size="L">
          <span id="registry">🎁 Gift registry</span>
        </Text>
        <Paragraph>
          We have registered with{" "}
          <strong>
            <Link target="_blank" href="https://www.hitchd.com/wildshmi">
              hitchd.com/wildshmi
            </Link>{" "}
          </strong>
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
          If you would prefer to do something different, please{" "}
          <Link href={{ pathname: basePath + "/contact" }}>get in touch</Link>{" "}
          with us.
        </Paragraph>
        <InfoBox title="Please note:" type="info">
          Unfortunately we are unable to accept physical gifts on the day of the
          wedding.
        </InfoBox>

        <Text tagName="h2" size="L">
          🙏 Expectations
        </Text>
        <InfoBox title="Good to know:" type="info">
          Gift giving is entirely optional. Being invited to the wedding does
          not mean you are expected to provide a gift.
        </InfoBox>
        <Paragraph>
          As our wedding guest, all we expect of you is your <del>presents</del>
          <ins>presence</ins>, nothing more. Our wedding is a once-in-a-lifetime
          experience for us, and it would mean the world to have your there.
        </Paragraph>
        <Paragraph>
          So, come and join us, dance with us, sing with us, take selfies and
          post them with #wildshmi on instagram. Indulge us in experiences that
          become memories, that become stories we hope to recount long into the
          future.
        </Paragraph>

        <Text></Text>
        <List></List>
      </div>
    </>
  );
};

export default GiftsPage;

// https://openbase.com/js/react-google-forms/documentation#example
