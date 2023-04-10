"use client";
import { useSelectedLayoutSegment } from 'next/navigation';

export const Segment = () => {
  const segment = useSelectedLayoutSegment() || '';
  return (
    <>
      {segment && segment
        .split('-')
        .map(txt => (
          txt[0].toUpperCase().concat(txt.slice(1))
        ))
        .join(' ')}
    </>
  )
}

