import Image from 'next/image';
import styles from "./styles.module.css";
import hero from "/public/assets/images/david-and-lakshmi-1.jpg"
import { Segment } from '@/shared/components/client/Segment';
import { FC, ReactNode } from 'react';
import { NavBar } from '@/shared/components/Navbar/NavBar';
import { InvitationContextProvider } from '@/shared/providers/InvitationContext';
import { InvitationType } from '@/shared/models';

const { heroImageWrapper, heroImage, heroFilter } = styles;

interface Props {
  children: ReactNode,
  invitationType: InvitationType
}

const LandingPage: FC<Props> = ({children, invitationType}: Props) => {

  return (
    <>
      <InvitationContextProvider invitationType={invitationType}>
        <NavBar invitationType={invitationType}></NavBar>

        <div className={heroImageWrapper}>
          <div className={heroFilter}></div>
            <Image
              className={heroImage}
              priority
              src={hero}
              alt="hero image example"
            />
          <header className="p-8">
            <Segment></Segment>

          </header>
        </div>
        { children }
        <hr />
      </InvitationContextProvider>
    </>
  )
}

export default LandingPage;