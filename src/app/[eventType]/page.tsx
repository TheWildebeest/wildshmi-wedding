export function generateStaticParams() {
  return [
    { eventType: 'wedding'},
    { eventType: 'wedding-reception'},
  ] 

}

import { WeddingPage } from "../../shared/components/client/wedding-page";
export default WeddingPage