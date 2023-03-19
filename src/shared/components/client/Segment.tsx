"use client";
import { useSelectedLayoutSegment } from 'next/navigation';

export const Segment = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <>
      {segment}
    </>
  )
}

