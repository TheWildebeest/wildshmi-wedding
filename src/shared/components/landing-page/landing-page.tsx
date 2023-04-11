import { FC, ReactNode } from 'react';
import { NavBar } from '@/shared/components/Navbar/NavBar';
import { InvitationContextProvider } from '@/shared/providers/InvitationContext';
import { EventType } from '@/shared/models';
import { HeroImage } from '@/shared/components/client/HeroImage/HeroImage';

interface Props {
  children: ReactNode,
  eventType: EventType
}

const LandingPage: FC<Props> = ({children, eventType}: Props) => {

  return (
    <>
      <InvitationContextProvider eventType={eventType}>
        <NavBar eventType={eventType}></NavBar>
        <HeroImage></HeroImage>
        <main className='
          w-100
          mt-2 sm:mt-6 md:mt-12
          px-4 sm:px-12 md:px-24 lg:mx-24'
          >
          { children }
        </main>
      </InvitationContextProvider>
    </>
  )
}

export default LandingPage;