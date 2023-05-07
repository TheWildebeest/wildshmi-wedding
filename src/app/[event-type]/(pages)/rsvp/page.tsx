"use client";
import { Paragraph } from "@/shared/components/Paragraph";
import { RsvpButton } from "@/shared/components/RSVPButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const RSVPPage: FC = () => {
  const basePath = usePathname()?.replace("/rsvp", "");
  return (
    <div className="max-w-[50em] mx-auto">
      <Paragraph>
        Please click below to be taken to the RSVP form. Please respond before{" "}
        <strong>Saturday 20th May</strong>.
      </Paragraph>
      <Paragraph>
        You only need to complete the form once, and you can reply on behalf of
        all guests on your invitation in one go.
      </Paragraph>
      <Paragraph>
        If you have any issues with the form, please{" "}
        <Link href={basePath + "/contact"}>get in touch</Link> with Lakshmi and
        David.
      </Paragraph>

      <RsvpButton></RsvpButton>
    </div>
  );
};

export default RSVPPage;
