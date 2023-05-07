import { Paragraph } from "@/shared/components/Paragraph";
import { Text } from "@/shared/components/Text";
import fonts from "@/shared/fonts";
import Link from "next/link";
import React, { FC } from "react";
import towerbridge from "@/../public/assets/images/tower-bridge.png";
import { AccessibleImage } from "@/shared/components/AccessibleImage";
import { List } from "@/shared/components/List";
import { InfoBox } from "@/shared/components/InfoBox";

const TravelAndTipsPage: FC = () => {
  const { merienda } = fonts;

  return (
    <div className="max-w-[50em] mx-auto">
      <Paragraph>
        As you prepare for your trip to the bustling city of London for our
        upcoming wedding, we&lsquo;ve put together some travel tips and
        recommendations to help you make the most of your time here.
      </Paragraph>
      <Text tagName="h2" size="L">
        🛬 International arrivals
      </Text>
      <Paragraph>
        Most international flights terminate at Gatwick or Heathrow, which are
        the most convenient airports to fly in to. Both airports have a premium
        &ldquo;express&rdquo; train service to central London, but there are
        also regular train services which are generally cheaper and more
        convenient, as well as taxi and bus services.
      </Paragraph>
      <InfoBox title="Good to know:" type="info">
        For the Gatwick Express and Heathrow Express you need to purchase a
        ticket before boarding the train, otherwise you will receive a fine.
      </InfoBox>
      <Text tagName="h3" size="M">
        ✈️ Gatwick
      </Text>
      <Paragraph>
        Train services at Gatwick run from the South Terminal. Transport between
        the terminals is free — just follow the signs.
      </Paragraph>
      <Paragraph>
        The <Link href="https://www.gatwickexpress.com/">Gatwick express</Link>{" "}
        runs direct to London Victoria, which is close to Westminster and
        Buckingham Palace — a great option if you want to start with some
        sightseeing. Travel takes 30 minutes.
      </Paragraph>
      <Paragraph>
        Alternatively, you can take a regular train service. Thameslink trains
        run to London Bridge, which has great transport links to the rest of
        London. This is a good option if you are heading to a hotel in Greenwich
        or somewhere else nearby the wedding reception venue.
      </Paragraph>
      <Paragraph>
        For regular train services (i.e. anything other than Gatwick Express),
        you can just tap in at the gates with your contactless debit/credit
        card. Just make sure you tap out at your destination too. Travel to
        London takes roughly 45 minutes for regular train services.
      </Paragraph>
      <Text tagName="h3" size="M">
        ✈️ Heathrow
      </Text>
      <Paragraph>
        The <Link href="https://www.heathrowexpress.com">Heathrow express</Link>{" "}
        runs direct to London Paddington and takes only 15 minutes. From there
        you can take a stroll in Hyde Park or Regent&lsquo;s Park, or head over
        to Baker Street and check out the Sherlock Holmes Museum.
      </Paragraph>
      <Paragraph>
        If you&lsquo;re not in a rush, you can instead take the Elizabeth Line,
        which also runs to Paddington as well as other stops, including Bond
        Street. For this option, you can just tap in at the gates with your
        contactless debit/credit card, and then tap out at your destination.
      </Paragraph>
      <Paragraph>
        You can even take the London Underground or &ldquo;tube&rdquo; from
        Heathrow via the Picadilly Line. Again, just tap in and out with your
        contactless card. This will be much slower, but much cheaper too.
      </Paragraph>
      <Text tagName="h2" size="L">
        🏙️ Getting around London
      </Text>
      <InfoBox title="Good to know:" type="info">
        Using Google Maps or CityMapper will make it much easier getting around
        by bus and tube.
      </InfoBox>
      <Paragraph>
        It is not necessary to purchase an Oyster Card or other form of travel
        card when visiting London these days. It&lsquo;s far more convenient and
        equally cost-effective to use a contactless debit or credit card or
        device for getting around the city.
      </Paragraph>
      <Paragraph>
        However, if this isn&lsquo;t suitable because of international
        transaction fees or something, you should sort out a
        <Link href="https://tfl.gov.uk/travel-information/visiting-london/visitor-oyster-card">
          {" "}
          visitor oyster card
        </Link>{" "}
        before you leave — this will be sent to your home address and you will
        benefit from daily price caps. Start with £15-£30 credit for a two- to
        four-day trip, and you can top up as needed.
      </Paragraph>
      <Text tagName="h2" size="M">
        🚇Train and Tube
      </Text>
      <InfoBox title="Remember:" type="info">
        Tap on, tap off, always use the same card.
      </InfoBox>
      <Paragraph>
        Similarly to most metro/subway systems, most train and London
        Underground stations have barriers where you can tap a contactless card
        or device to gain access to or exit from a station.
      </Paragraph>
      <Paragraph>
        Some stations have no barriers, and some or don&lsquo;t use them all of
        the time, but you still need to tap your card or device on entry and
        exit on the yellow card reader, in order to be charged the correct fare.
      </Paragraph>
      <Paragraph>
        Make sure you always use the same payment method during your time in
        London. There is a daily and weekly{" "}
        <Link href="https://tfl.gov.uk/fares/find-fares/tube-and-rail-fares/pay-as-you-go-caps">
          price cap
        </Link>{" "}
        which is automatically applied but if you use multiple payment methods,
        you could end up spending more than you need to.
      </Paragraph>
      <Text tagName="h2" size="M">
        🚌 Bus
      </Text>
      <InfoBox title="Remember:" type="info">
        Just tap once!
      </InfoBox>
      <Paragraph>
        You only need to tap on when you board a bus — it&lsquo;s a fixed fare.
        Unlike trains and the Tube, you don&lsquo;t tap off.
      </Paragraph>
      <Paragraph>
        Like trains and the Tube, though, bus fares are also covered by a{" "}
        <Link href="https://tfl.gov.uk/fares/find-fares/tube-and-rail-fares/pay-as-you-go-caps">
          price cap
        </Link>{" "}
        , so make sure you use the same payment method on all transport in
        London.
      </Paragraph>
      <Text tagName="h2" size="L">
        🏨 Accommodation
      </Text>
      <Paragraph>
        We recommend staying in the Greenwich area, close to our reception venue
        (Greenwich Yacht Club) — so you can make a quick and easy journey back
        to your hotel after a whole evening of merriment at our wedding! It also
        makes the prospect of a low-key post-nuptial brunch with the newlyweds
        all the more likely.
      </Paragraph>
      <Paragraph>
        Below are a few hotels within walking distance (&lt;20 mins) of the
        Greenwich Yacht Club:
      </Paragraph>
      <List>
        <li>
          <Link href="https://goo.gl/maps/cioaH5yNQL8ZrGKT8">
            The Pilot Greenwich
          </Link>
        </li>
        <li>
          <Link href="https://goo.gl/maps/9mLSzeXwTHxwjZN18">
            Holiday Inn Express
          </Link>
        </li>
        <li>
          <Link href="https://goo.gl/maps/rcU8cSCfdvDbYFAW9">Radisson RED</Link>
        </li>
        <li>
          <Link href="https://goo.gl/maps/ahTwpSg4zq2b9vrK8">
            London Angerstein hotel
          </Link>
        </li>
      </List>
      <Paragraph>
        Slightly further afield, but very close to where Lakshmi and David live,
        there are some other great affordable options:
      </Paragraph>
      <List>
        <li>
          <Link href="https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-lewisham.html">
            Premier Inn London Lewisham
          </Link>
        </li>
        <li>
          <Link href="https://www.travelodge.co.uk/hotels/695/London-Lewisham-hotel">
            Travelodge London Lewisham
          </Link>
        </li>
        <li>
          <Link href="https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-greenwich.html">
            Premier Inn London Greenwich
          </Link>
        </li>
      </List>
      <Paragraph>
        If you have any trouble finding somewhere to stay, please do get in
        touch with David and Lakshmi — they&lsquo;ll be happy to help.
      </Paragraph>
      <Text tagName="h2" size="L">
        🎠 Attractions
      </Text>
      <Paragraph>
        London is home to many famous landmarks and attractions, such as the
        Tower of London, Buckingham Palace, and the London Eye. Other must-see
        sights include the British Museum, the National Gallery, and the Tate
        Modern. The{" "}
        <Link href="https://londonpass.com/en-us/london-attractions">
          London Pass
        </Link>{" "}
        gets you seamless access to 80+ tourist attractions at great value.
      </Paragraph>
      <Text tagName="h2" size="L">
        🍴 Food and Drink
      </Text>
      <Paragraph>
        London is a vibrant and diverse city with a wide variety of food and
        drink options. From traditional British cuisine to international
        flavors, there is something for everyone. When it comes to must-try food
        in London, you can&lsquo;t go wrong with classics like fish and chips, a
        traditional Sunday roast or a full English breakfast.
      </Paragraph>
      <Paragraph>
        Lakshmi and David have a few local favourites that they frequent and
        recommend:
      </Paragraph>
      <List>
        <li>
          <Link href="https://gunpowderrestaurants.com/">Gunpowder</Link> for
          Indian food with a modern twist
        </li>
        <li>
          <Link href="https://duckandwaffle.com/">Duck and Waffle</Link> for
          European food with 40th floor views
        </li>
        <li>
          <Link href="https://boroughmarket.org.uk/">Borough Market</Link> — a
          historic food market in Central London
        </li>
        <li>
          <Link href="https://ye-olde-cheshire-cheese.co.uk/">
            Ye Olde Cheshire Cheese
          </Link>{" "}
          a traditional pub from the 1500s
        </li>
        <li>
          <Link href="https://www.thetoucansoho.co.uk/">Toucan</Link> an Irish
          pub in Soho - it can get busy!
        </li>
        <li>
          <Link href="https://gailsbread.co.uk/">Gail&lsquo;s</Link> for
          pastries and coffee breaks
        </li>
      </List>
      <Paragraph>
        You can find pretty much any cuisine you want in London — shout if
        you&lsquo;re craving something specific!
      </Paragraph>
      <Text tagName="h2" size="L">
        ⛅ Weather
      </Text>
      <Paragraph>
        August is usually a warm and sunny month in London and average
        temperature will be around 23 degree celsius. But as London weather is
        notoriously unpredictable, we recommend bringing a jacket or light
        sweater just in case. Comfortable shoes are also recommended if there is
        a lot of walking (or dancing) involved.
      </Paragraph>
      <Text tagName="h2" size="L">
        🚓 Safety
      </Text>
      <Paragraph>
        London is generally a safe city, but it&lsquo;s always a good idea to
        take precautions. We recommend keeping an eye on your belongings,
        especially in crowded areas and around tourist attractions.
      </Paragraph>
      <AccessibleImage
        image={towerbridge}
        altText="David and Lakshmi by Tower Bridge"
        captionText="An iconic sight, plus there is a bridge"
      />
      <Paragraph>
        <span className={merienda}>
          &ldquo;We hope these tips and recommendations will help you make the
          most of your time here and we look forward to hosting you at our
          wedding!&rdquo;
        </span>{" "}
        — David and Lakshmi
      </Paragraph>
    </div>
  );
};
export default TravelAndTipsPage;
