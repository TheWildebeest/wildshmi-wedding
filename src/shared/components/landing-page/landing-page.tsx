import { FC, ReactNode } from "react";
import { NavBar } from "@/shared/components/Navbar/NavBar";
import { InvitationContextProvider } from "@/shared/providers/InvitationContext";
import { EventType } from "@/shared/models";
import { HeroImage } from "@/shared/components/client/HeroImage/HeroImage";
import hero from "/public/assets/images/david-and-lakshmi-1.jpg";
import fonts from "@/shared/fonts";

interface Props {
  children: ReactNode;
  eventType: EventType;
}

const LandingPage: FC<Props> = ({ children, eventType }: Props) => {
  const { arima } = fonts;
  return (
    <>
      <InvitationContextProvider eventType={eventType}>
        <NavBar eventType={eventType}></NavBar>
        <HeroImage src={hero}></HeroImage>
        <main
          className="
          w-100
          mt-2 sm:mt-6 md:mt-12
          px-4 sm:px-12 md:px-24 lg:mx-24"
        >
          {children}
        </main>
        <footer>
          <br />
          <hr />
          <br />
          <p
            className={`w-100 font-light text-center text-2xs lg:text-xs xl:text-sm ${arima}`}
          >
            ♥ The Wildshmi Wedding ♥
          </p>
          <br />

          <hr />
        </footer>
      </InvitationContextProvider>
    </>
  );
};

export default LandingPage;
