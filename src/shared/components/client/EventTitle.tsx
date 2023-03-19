"use client"
import { Data } from '@/pages/api/invitation';
import { Segment } from '@/shared/components/client/Segment';
import { HeadingOne } from '@/shared/components/HeadingOne'
import { SegmentContext } from '@/shared/SegmentContext';
import { titleCase } from '@/shared/titleCase';
import { use, useContext } from 'react';

export default function EventTitle() {
  const segment = useContext(SegmentContext)
  const segmentText = titleCase(segment);
  const res: Response = use(fetch("http://localhost:3000/api/invitation"));
  const data: Data = use(res.json());
  console.log('Fetched data: ', data.url)
  return (
    <>
      <HeadingOne>
        {"The " + segmentText + " of David Wildman and Lakshmi Haridas"}
      </HeadingOne>
    </>
  )
}
