import LandingPage from "@/shared/components/landing-page/landing-page";
import { InvitationTypes } from "@/shared/models";
import { ReactNode } from "react";

interface Props {
  children: ReactNode,
}

const WeddingLandingPage = ({children}: Props) => {
  return LandingPage({ children, invitationType: InvitationTypes.EVENING_GUEST })
}

export default WeddingLandingPage;