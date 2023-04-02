import LandingPage from "@/shared/components/landing-page/landing-page";
import { ReactNode } from "react";

interface Props {
  params: { 'event-type': 'wedding'|'wedding-reception' }
  children: ReactNode,
}

export function generateStaticParams() {
  return [
    { 'event-type': 'wedding'},
    { 'event-type': 'wedding-reception'},
  ] 
}

export const dynamicParams = false;

const WeddingLandingPage = ({children, params}: Props) => {
  const { 'event-type': eventType } = params;
  return LandingPage({ children, eventType })
}

export default WeddingLandingPage;