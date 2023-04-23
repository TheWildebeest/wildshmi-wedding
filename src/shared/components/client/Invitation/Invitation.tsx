"use client"
import { Data } from '@/pages/api/invitation';
import { Text } from '@/shared/components/Text'
import { EventNames } from '@/shared/models';
import { InvitationContext } from '@/shared/providers/InvitationContext';
import { use, useContext } from 'react';
import fonts from '@/shared/fonts';

export const Invitation = () => {
  const { arima } = fonts;
  const eventName = EventNames[(useContext(InvitationContext))]
  // const res: Response = use(fetch("http://localhost:3000/api/invitation"));
  // const data: Data = use(res.json());
  // console.log('Fetched data: ', data.url)
  return (
    <div className={'text-center ' + arima}>
      <Text tagName='div' size='M'>You are warmly invited to join</Text>
      <Text tagName='div' size='XXL'>David <strong style={{ color: 'var(--wildshmi-primary)'}}>&</strong> Lakshmi</Text>
      <Text tagName='div' size='M'>at our {eventName} on</Text>
      <Text tagName='div' size='XL'>26 August 2023</Text>
    </div>
  )
}
