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
          { children }
      </InvitationContextProvider>
    </>
  )
}

export default LandingPage;