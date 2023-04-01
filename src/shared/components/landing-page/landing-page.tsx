import Image from 'next/image';
import styles from "./styles.module.css";
import hero from "/public/assets/images/david-and-lakshmi-1.jpg"
import { Segment } from '@/shared/components/client/Segment';
import { FC, ReactNode } from 'react';
import { NavBar } from '@/shared/components/Navbar/NavBar';
import { InvitationContextProvider } from '@/shared/providers/InvitationContext';
import { InvitationType } from '@/shared/models';

const { heroWrapper, heroImage } = styles;

interface Props {
  children: ReactNode,
  invitationType: InvitationType
}

const LandingPage: FC<Props> = ({children, invitationType}: Props) => {

  return (
    <>
      <InvitationContextProvider invitationType={invitationType}>
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
      </InvitationContextProvider>
    </>
  )
}

export default LandingPage;