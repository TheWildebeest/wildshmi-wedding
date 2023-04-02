"use client"
import { Data } from '@/pages/api/invitation';
import { HeadingOne } from '@/shared/components/HeadingOne'
import { EventNames } from '@/shared/models';
import { InvitationContext } from '@/shared/providers/InvitationContext';
import { use, useContext } from 'react';

export default function EventTitle(params?: any) {
  const eventName = EventNames[(useContext(InvitationContext))]
  const res: Response = use(fetch("http://localhost:3000/api/invitation"));
  const data: Data = use(res.json());
  console.log('Fetched data: ', data.url)
  return (
    <>
    <h1>{params?.eventType}</h1>
      <HeadingOne>
        {"The " + eventName + " of David Wildman and Lakshmi Haridas"}
      </HeadingOne>
    </>
  )
}
