"use client"
import EventTitle from '@/shared/components/client/EventTitle';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode,
}

const WeddingPage: FC<Props> = ({ children }: Props) => (
  <>
    <EventTitle></EventTitle>
    {children}
  </>
);

export { WeddingPage };