"use client";
import { Paragraph } from "@/shared/components/Paragraph";
import React, { FC, MutableRefObject, useRef } from "react";

const RSVPPage: FC = () => {
  const iframeRef: MutableRefObject<HTMLIFrameElement | null> = useRef(null);
  const height =
    iframeRef?.current?.contentWindow?.document.body.scrollHeight || 1200;
  return (
    <div className="max-w-[50em] mx-auto">
      {/* <Text tagName='h2' size='L'>Beginnings</Text> */}
      <Paragraph>Please fill out the form below to RSVP.</Paragraph>
      <iframe
        ref={iframeRef}
        style={{ width: "100%", minHeight: `${height}px` }}
        src="https://docs.google.com/forms/d/e/1FAIpQLScYeqFc_JlvkT769oNk5EfEuUKc0UAm3JsoWdd7QUfYUTPYyw/viewform?embedded=true"
        width={640}
        height={height}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </div>
  );
};

export default RSVPPage;
