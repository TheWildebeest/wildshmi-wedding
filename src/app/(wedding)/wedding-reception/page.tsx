import { Data } from '@/pages/api/invitation';
import EventTitle from '@/shared/components/client/EventTitle';
import { HeadingOne } from '@/shared/components/HeadingOne'

export default async function Wedding() {
  const res: Response = await fetch("http://localhost:3000/api/invitation");
  const data: Data = await res.json();
  console.log('Fetched data: ', data.url)
  return (
    // <HeadingOne>The Wedding Reception of David Wildman and Lakshmi Haridas</HeadingOne>
    <EventTitle></EventTitle>

  )
}
