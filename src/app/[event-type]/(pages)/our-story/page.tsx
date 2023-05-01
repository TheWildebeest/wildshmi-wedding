"use client"

import { Paragraph } from "@/shared/components/Paragraph";
import { Text } from "@/shared/components/Text";
import React, { FC } from "react"
import goddessLakshmi from '@/../public/assets/images/goddess-lakshmi.jpg';
import blingshmi from '@/../public/assets/images/blingshmi.jpg';
import beautyshmi from '@/../public/assets/images/beautyshmi.jpg';
import laughshmi from '@/../public/assets/images/laughshmi.jpg';
import kingdavid from '@/../public/assets/images/king-david.jpg';
import violindavid from '@/../public/assets/images/violin.jpg';
import birthdaysingers from '@/../public/assets/images/birthday-singers.jpg';
import codingdavid from '@/../public/assets/images/code-and-sleep.jpg';
import threetuns from '@/../public/assets/images/three-tuns-outside.jpg';
import keralacuties from '@/../public/assets/images/kerala-cuties.jpg';
import covidcuties from '@/../public/assets/images/covid-cuties.jpg';
import exhausted from '@/../public/assets/images/exhausted.jpg';
import folks from '@/../public/assets/images/folks.jpg';
import proposal from '@/../public/assets/images/proposal.jpg';
import surpriseparty from '@/../public/assets/images/surprise-party.jpg';
import { AccessibleImage } from "@/shared/components/AccessibleImage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import fonts from "@/shared/fonts";

const OurStoryPage: FC = () => {
  const { merienda } = fonts
  const basePath = usePathname()?.replace('/our-story', '');

  return <div className='max-w-[50em] mx-auto'>
    <Text tagName='h2' size='L'>Beginnings</Text>
    <Paragraph>
      All of the greatest heroes have a really cool origin story.
    </Paragraph>
    <Paragraph>
      Unfortunately, Lakshmi and David are <i>not</i> superheroes, regardless of how they may privately view themselves and/or each other.
    </Paragraph>
    <Paragraph>
      Take it from someone who knows them pretty darn well — they&lsquo;re just a couple of regular folk.
    </Paragraph>
    <Paragraph>
      Notwithstanding their underwhelming averageness, if you&lsquo;re not equally well acquainted with both Lakshmi and David, there are probably a couple of interesting facts about them that you don&lsquo;t know.
    </Paragraph>
    <Text tagName='h3' size='M'>Lakshmi&lsquo;s origin story</Text>
    <Paragraph>
      Lakshmi is named after the Hindu goddess of wealth. Below, you can see a traditional representation of Lakshmi — flush with cash, and remarkably zen about it. 
    </Paragraph>
    <AccessibleImage image={goddessLakshmi} altText='Goddess Lakshmi sitting on a lotus' captionText='Goddess Lakshmi, flaunting her gold bling' />
    <Paragraph>
      Parents will frequently bestow daughters with this providential namesake in the hope of manifesting a destiny that sees them grow up to become rich and successful.
    </Paragraph>
    <Paragraph>
      Imagine, growing up seeing your name associated primarily with a literal goddess who has gold coins pouring out of her hands. You&lsquo;d be forgiven for occasionally wondering whether this might be a hard act to follow.
    </Paragraph>
    <Paragraph>
      Not so for <i>this</i> Lakshmi, who has made it her life&lsquo;s goal to place the mother of all ticks in the archetypes box by pursuing a career in investment banking. At the time of writing, she&lsquo;s a VP in Electronic Trading at Bank of America. It sounds impressive, though no-one actually knows what it means.
    </Paragraph>
    <Paragraph>
      Born in Thiruvananthapuram, capital of the state of Kerala in India, Lakshmi is a true citizen of the world. She spent her childhood between India, South Africa, and Oman, and left to study in Singapore, where she then worked for a number of years. In 2017 she moved to Hong Kong for a couple of years, before relocating to London. 
    </Paragraph>
    <AccessibleImage image={blingshmi} altText='Lakshmi casually trying on jewelry' captionText='An actual Lakshmi with actual gold bling' />
    <AccessibleImage image={beautyshmi} altText='Lakshmi wearing gold jewelry on her engagement day' captionText='Looking incredible on her engagement day' />
    <Paragraph>
      Lakshmi had been something of a rebel during her school days. When the time came to apply to universities, a family friend suggested she apply to a relatively mediocre university (NTU) in Singapore. Instead, she ended up accidentally applying to one of the top ten Engineering courses in the world, and winning a full scholarship that propelled her to success. As an Alumnus of the National University of Singapore, Lakshmi lays claim to a status whose pedagogical pedigree is as impressive as its acronym is unfortunate.
    </Paragraph>
    <Paragraph>
      What does a bona-fide goddess of wealth look for in a man, than? Fortunately for David, she cares more about personality than paycheck, and even then, the personality requirements aren&lsquo;t particularly stringent. From as early as she can remember, Lakshmi has always known what see wanted in a man. At school when her friends would ask her what type of guy she wanted to marry, her answer was always the same: &ldquo;A funny guy&rdquo;.
    </Paragraph>
    <AccessibleImage image={laughshmi} altText="Lakshmi laughing at her boyfriend&lsquo;s jokes" captionText="Lakshmi and a funny guy" />
    <Text tagName='h3' size='M'>David&lsquo;s origin story</Text>
    <Paragraph>
      Though not a golden goddess, David&lsquo;s name also comes with a hefty pedigree — that of David, King of Israel, from the Bible. The story goes that he rose from humble origins as a shepherd boy and there&lsquo;s a famous story about him using his shepherd&lsquo;s slingshot to kill the phillistine giant Goliath.
    </Paragraph>
    <AccessibleImage image={kingdavid} altText="King David playing the harp" captionText="Biblical David was known to play the harp" />
    <Paragraph>
      Perhaps the main area where the regal and non-regal Davids differ is in the caliber of giants they heave defeated. David reluctantly concedes the point that demolishing a footlong Subway sandwich really isn&lsquo;t as impressive as toppling Goliath.
    </Paragraph>
    <Paragraph>
      Much like his namesake, though, David loves playing stringed instruments, the guitar in particular. He&lsquo;s learned to play one or two famous guitar solos quite well, and he is quite pretty chuffed with this achievement.
    </Paragraph>
    <AccessibleImage image={violindavid} altText="David playing violin" captionText="David... that&lsquo;s not even a guitar" />
    {/* <AccessibleImage image={birthdaysingers} altText='David and his siblings singing' captionText='The Wildman siblings singing' /> */}
    <Paragraph>
      David was born in Liverpool and grew up on the Isle of Man. After visiting China at the age of 16, he opted to study Chinese at the University of Cambridge. Cambridge was the sixth best university in the world during David&lsquo;s time there. Thankfully, nearly a decade on, Cambridge has recovered from the impact of David&lsquo;s tenure, and it now comes in at third place.
    </Paragraph>
    <Paragraph>
      Starting his career in media sales, David spent three years selling digital advertising to clients in Jersey, Guernsey, London, and even the Isle of Man; eventually branching out further afield and visiting Moscow, Kuala Lumpur, Beijing, and Shanghai.
    </Paragraph>
    <Paragraph>
      It was as stressful as it sounds, and David is relieved to be on the other side of a career change which he started in early 2019. Starting from scratch with a course in software development that he completed during the first lockdown, David is now gainfully employed in his second Software Developer role. He loves JavaScript almost as much as he once loved Mandarin Chinese, but far less than he loves his golden goddess Lakshmi.
    </Paragraph>
    <AccessibleImage image={codingdavid} altText="David reading a magazine with Lakshmi sleeping next to him" captionText="Some bedtime reading" />
    <Text tagName='h2' size='M'>How they met</Text>
    <Paragraph className={merienda}>
      &ldquo;We met the old fashioned way — on Tinder!&rdquo;
    </Paragraph>
    <Paragraph>
      Lakshmi and David have been together (pretty much literally) from when they first met in the Three Tuns pub in Aldgate East in London, on November 3rd 2020.
    </Paragraph>
    <Paragraph>
      With nowhere to sit inside, they took their pints outside to the beer garden, with nothing but the warmth of each others&lsquo; company and an array of carefully positioned halogen lamps to ward off the chill of the November air.
    </Paragraph>
    <AccessibleImage image={threetuns} altText="David and Lakshmi at the pub" captionText="Visiting those fateful halogens again two years later" />

    <Paragraph>
      They took an instant liking to one another. Lakshmi was impressed by David&lsquo;s biceps, and David was bowled over by Lakshmi&lsquo;s generous compliments.
    </Paragraph>
    <Paragraph>
      Lakshmi approached David with a proposition that he simply couldn&lsquo;t refuse. She told him she had an Xbox One and a new game had just come out that was co-operative multiplayer.
    </Paragraph>
    <Paragraph>
      &ldquo;Beer and video games !? I&lsquo;d better hold on to this one!&rdquo;, David thought to himself.
    </Paragraph>
    <Paragraph>
      Over the next two months, David and Lakshmi got to know each other as Leo and Vincent, the playable protagonist characters in A Way Out. As Leo and Vincent, they met each other for the first time again, escaped from prison together, evaded police, and tracked down a crime boss, all while navigating the twists and turns of the characters&lsquo; relationship.
    </Paragraph>
    <Paragraph>
      The following two years, meanwhile, have seen David and Lakshmi get to know each other in real life. This has thankfully featured far less violence and fewer encounters with police (apart from that one time). Nevertheless, the journey has been equally if not more exhilarating, as they stepped outside their comfort zones, daring to trust and support one another enough to be able to start planning a future together.
    </Paragraph>
    <AccessibleImage image={exhausted} altText="Lakshmi comforts David" captionText="After a long day of debacles with easyJet, Lakshmi was a sight for sore eyes" />
    <Paragraph>
      In many ways, it has been all-or-nothing since the start. The day after their first date, a national lockdown came into effect. This was the second such lockdown of the Covid-19 pandemic, and though we all knew the drill by this point, Lakshmi and David were faced with forming a &ldquo;support bubble&rdquo; in order to be able to continue seeing each other, or waiting until after lockdown. Who would have known that the humble bubble which once supported Lakshmi and David&lsquo;s nascent relationship was to be a progenitor of nuptials?
    </Paragraph>
    <Paragraph>
      Because of the lockdown, their first months were spent in close quarters at each others&lsquo; flats, playing games, cooking exotic meals together, watching TV shows. It was only later as restrictions eased that they began to venture out to explore the streets of East London, visiting the docks to feed the ducks, and taking evening strolls by the river and across Tower Bridge.
    </Paragraph>
    <AccessibleImage image={covidcuties} altText="Lakshmi and David" captionText="Sun&lsquo;s out masks off" />
    <Paragraph>
      In the summer of 2022 they had the opportunity to meet each others&lsquo; parents, with Haridas and Latha flying over from Trivandrum and Chris and Martine from the Isle of Man, to spend some time testing the waters as in-laws. They knew it would work out when David cooked dinner for the parents one evening and brought together both mothers&lsquo; signature recipes in one meal — Martine&lsquo;s lentil pasta sauce taking on a new role as daal, alongside Latha&lsquo;s lamb biryani.
    </Paragraph>
    <AccessibleImage image={folks} altText="Lakshmi and David and their parents" captionText="Introducing the in-laws to the Full English" />

    <Text tagName='h2' size='M'>Getting engaged</Text>
    <Paragraph>
      The decision to get married happened organically and gradually as Lakshmi and David got to know each other, but as 2022 drew to a close they started thinking of making it a reality. 
    </Paragraph>
    <Paragraph>
      2023 kicked off with choosing the date, and as February edged ever closer, David started planning a proper proposal to surprise Lakshmi with a ring on Valentine&lsquo;s day.
    </Paragraph>
    <Paragraph>
      Secretly booking the day off work for both of them, David arrange a day full of romantic activities — breakfast at sunrise in a fortieth-floor restaraunt, a massage workshop with roses, prosecco, and chocolates, a game of chess which <del>he let Lakshmi win</del> <ins style={{ textDecoration: 'none'}}>Lakshmi won fair and square</ins>, and an afternoon tea with a special diamond-based dessert!
    </Paragraph>
    <AccessibleImage image={proposal} altText="David proposing to Lakshmi" captionText="♫ He liked it so he put a ring on it ♪" />
    <Paragraph>
      It was the perfect day and they celebrated afterwards with another surprise — a trip back to where it all started at The Three Tuns, where Lakshmi&lsquo;s friends and colleagues were waiting with prosecco on standby to surprise her.
    </Paragraph>
    <AccessibleImage image={surpriseparty} altText="A surprise party" captionText="Totally got her! She had no idea!" />
    <Paragraph>
      Going straight from one whirlwind experience to another, David and Lakshmi then jetted off to India in March 2023 along with David&lsquo;s parents, sister, and two brothers, for an &ldquo;official&rdquo; engagement ceremony with Lakshmi&lsquo;s extended family. This conveniently doubled up as a massive birthday bash for Lakshmi&lsquo;s mother Latha.
    </Paragraph>
    <AccessibleImage image={birthdaysingers} altText="David and his siblings" captionText="Singing happy birthday to Lakshmi&lsquo;s mum" />
    <Paragraph>
      You can check out the photos from the proposal and the engagement party on the <Link href={{ pathname: basePath + '/photos' }}>photos page</Link>.
    </Paragraph>
    <Paragraph>
      Then, make sure you fill in the RSVP form so you can join Lakshmi and David in creating more happy memories (and taking more awesome photos) with them at the wedding on 26 August.
    </Paragraph>
    <AccessibleImage image={keralacuties} altText="Sunset in Kerala" captionText="The view from Lakshmi&lsquo;s rooftop in Kerala" />

    <Paragraph className={merienda}>
      &ldquo;We can&lsquo;t wait to see you there — it&lsquo;s going to be a blast!&rdquo;
    </Paragraph>
  </div>
}
export default OurStoryPage;