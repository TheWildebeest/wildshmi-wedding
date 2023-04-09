"use client"
import { Data } from '@/pages/api/invitation';
import { Text } from '@/shared/components/Text'
import { EventNames } from '@/shared/models';
import { InvitationContext } from '@/shared/providers/InvitationContext';
import { use, useContext } from 'react';
import fonts from '@/shared/fonts';

export const Invitation = () => {
  const eventName = EventNames[(useContext(InvitationContext))]
  const res: Response = use(fetch("http://localhost:3000/api/invitation"));
  const data: Data = use(res.json());
  console.log('Fetched data: ', data.url)
  return (
    <div className={`${fonts.caveat} w-100 pt-2 px-2 lg:px-6 lg:pt-2 text-center`}>
      <Text tagName='div' size='M'>You are warmly invited to join</Text>
      <Text tagName='div' size='XXL'>David & Lakshmi</Text>
      <Text tagName='div' size='M'>at our {eventName} on</Text>
      <Text tagName='div' size='XL'>26 August 2023</Text>
    </div>
  )
}
