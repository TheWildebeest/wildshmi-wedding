"use client"
import Invitation from '@/shared/components/client/Invitation';
import { Text } from '@/shared/components/Text';
import { FC, ReactNode } from 'react';
import Image from 'next/image'
import rose from '../../../public/assets/images/rose-1.webp';

interface Props {
  params: { eventType: 'wedding'|'wedding-reception' }
  children: ReactNode,
}

const WeddingPage: FC<Props> = ({ children, params }: Props) => (
  <>
    <Invitation></Invitation>
    <div className='text-center w-100'>
    <Text tagName='div' size='XL'>
      <Image
        src={rose}
        alt='Picture of a rose'
        style={{
          margin: '1rem auto 0',
          // objectPosition: 'center center',
          objectFit: 'cover',
          width: '6em'
        }}
        >
      {/* style={{color: "white", objectPosition: "0 12%", objectFit: "cover"}} src={babyLakshmi} alt="Lakshmi as a child" */}
      </Image>
    </Text>

    </div>
      {children}
  </>
);

export default WeddingPage;