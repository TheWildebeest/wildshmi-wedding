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
        <main className='w-100 pt-2 lg:pt-6 px-2 lg:px-6 '>
          { children }
        </main>
      </InvitationContextProvider>
    </>
  )
}

export default LandingPage;