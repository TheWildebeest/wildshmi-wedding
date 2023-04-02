"use client"
import EventTitle from '@/shared/components/client/EventTitle';
import { FC, ReactNode } from 'react';

interface Props {
  params: { eventType: 'wedding'|'wedding-reception' }
  children: ReactNode,
}

const WeddingPage: FC<Props> = ({ children, params }: Props) => (
  <>
    <EventTitle></EventTitle>
    <h2>{params.eventType}</h2>
    {children}
  </>
);

export default WeddingPage;