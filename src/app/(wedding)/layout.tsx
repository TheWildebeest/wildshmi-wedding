"use client"
import { Data } from '@/pages/api/invitation';
import Image from 'next/image';
import styles from "./styles.module.css";
import hero from "/public/assets/images/hero-4.webp"
import { Segment } from '@/shared/components/client/Segment';
import { ReactNode } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { SegmentContextProvider } from '../../shared/SegmentContext';
import { NavBar } from '@/shared/components/Navbar/NavBar';

const { heroWrapper, heroImage } = styles;

interface Props {
  children: ReactNode
}

export default function ContentLayout({children}: Props) {

  const segment = useSelectedLayoutSegment();

  return (
    <>
      <SegmentContextProvider segment={segment || ''}>
        <NavBar></NavBar>
        <div className={heroWrapper}>
          <Image
            className={heroImage}
            priority
            src={hero}
            alt="hero image example"
          />
          <header className="p-8">
          <Segment></Segment>
            <nav>
              <ul className='uppercase font-bold'>
                <li className='hidden lg:inline-block px-2'>Our big day </li>
                <li className='hidden lg:inline-block px-2'>Our story </li>
                <li className='hidden lg:inline-block px-2'>Travel and tips </li>
                <li className='hidden lg:inline-block px-2'>RSVP </li>
                <li className='hidden lg:inline-block px-2'>Gifts </li>
                <li className='hidden lg:inline-block px-2'>Contact </li>
              </ul>
            </nav>
          </header>
        </div>
        { children }
        <hr />
      </SegmentContextProvider>
    </>
  )
}
