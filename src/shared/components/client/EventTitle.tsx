"use client"
import { Data } from '@/pages/api/invitation';
import { HeadingOne } from '@/shared/components/HeadingOne'
import { getEventNameByInvitationType } from '@/shared/helpers/invitationTypeHelpers';
import { InvitationContext } from '@/shared/providers/InvitationContext';
import { use, useContext } from 'react';

export default function EventTitle() {
  const eventText = getEventNameByInvitationType(useContext(InvitationContext))
  const res: Response = use(fetch("http://localhost:3000/api/invitation"));
  const data: Data = use(res.json());
  console.log('Fetched data: ', data.url)
  return (
    <>
      <HeadingOne>
        {"The " + eventText + " of David Wildman and Lakshmi Haridas"}
      </HeadingOne>
    </>
  )
}
