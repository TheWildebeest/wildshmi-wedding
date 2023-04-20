"use client"

import { Paragraph } from "@/shared/components/Paragraph";
import { Text } from "@/shared/components/Text";
import React, { FC, PropsWithChildren } from "react"
import goddessLakshmi from '@/../public/assets/images/goddess-lakshmi-2.jpg';
import blingshmi from '@/../public/assets/images/blingshmi.jpg';
import laughshmi from '@/../public/assets/images/laughshmi.jpg';
import kingdavid from '@/../public/assets/images/king-david.jpg';
import { AccessibleImage } from "@/shared/components/AccessibleImage";
import Link from "next/link";
import { usePathname } from "next/navigation";

const OurStoryPage: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const basePath = usePathname()?.replace('/our-story', '');

  return <>
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
      Not so for <i>this</i> Lakshmi, who has made it her life&lsquo;s goal to place the mother of all ticks in the archetypes box by pursuing a career in investment banking. At the time of writing, she&lsquo;s a VP in Electronic Trading at Bank of America, and impatient as ever that she <i>still</i> hasn&lsquo;t bagged that Director role yet.
    </Paragraph>
    <Paragraph>
      Born in Thiruvananthapuram, capital of the state of Kerala in India, Lakshmi is a true citizen of the world. She spent her childhood between India and Oman, and spent a year in South Africa as a late teenager. She left to study in Singapore, where she then worked for a number of years, before moving to Hong Kong and then finally to London. 
    </Paragraph>
    <AccessibleImage image={blingshmi} altText='Lakshmi wearing gold jewelry' captionText='An actual Lakshmi with actual gold bling' />
    <Paragraph>
      Despite being something of a rebel during her school days, the sheer strength of her fierce intelligence propelled her to success, winning a scholarship to study one of the most highly ranked Computer Science courses in the world at the National University of Singapore. As an <strong>A</strong>lumnus of the <strong>N</strong>ational <strong>U</strong>niversity of <strong>S</strong>ingapore, Lakshmi lays claim to a status the pedagogical pedigree of which is as impressive as its acronym is unfortunate.
    </Paragraph>
    <Paragraph>
      What does a bona-fide goddess of wealth look for in a man, than? Fortunately for David, she cares more about personality than paycheck, and even then, the personality requirements aren&lsquo;t particularly stringent. From as early as she can remember, Lakshmi has always known what see wanted in a man. At school when her friends would ask her what type of guy she wanted to marry, her answer was always the same: &ldquo;A funny guy&rdquo;.
    </Paragraph>
    <AccessibleImage image={laughshmi} altText="Lakshmi laughing at her boyfriend&lsquo;s jokes" captionText="Lakshmi and a funny guy" />
    <Paragraph>
      
    </Paragraph>
    <Text tagName='h3' size='M'>David&lsquo;s origin story</Text>
    <Paragraph>
      Though not a golden godess, David&lsquo;s name also comes with a hefty pedigree — that of David, King of Israel, from the Bible. The story goes that he rose from humble origins as a shepherd boy and there&lsquo;s a famous story about him using his shepherd&lsquo;s slingshot to kill the Phillistine giant Goliath.
    </Paragraph>
    <AccessibleImage image={kingdavid} altText="King David playing the harp" captionText="Biblical David was known to play the harp" />
    <Paragraph>
      Much like his namesake, David loves playing stringed instruments, the guitar in particular. He&lsquo;s learned to play one or two famous guitar solos quite well, and he is quite chuffed with himself as a result.
    </Paragraph>
    <Paragraph>
      One area where the regal and non-regal Davids differ is in the caliber of giants they pick as enemies. The only giant David has slain is his own expectations of becoming rich and successful before the age of 35.
    </Paragraph>
    <Paragraph>
      David was born in Liverpool and grew up on the Isle of Man. After visiting China at the age of 16, he opted to study Chinese at the University of Cambridge. Cambridge was the 6th best university in the world during David&lsquo;s time there. Thankfully, nearly a decade on, Cambridge has recovered from the impact of David&lsquo;s tenure, and it now comes in at third place.
    </Paragraph>
    <Paragraph>
      Starting his career in media sales, David spent three years selling digital advertising to clients in Jersey, Guernsey, London, and even the Isle of Man; eventually branching out further afield and visiting Moscow, Kuala Lumpur, Beijing, and Shanghai.
    </Paragraph>
    <Paragraph>
      It was as stressful as it sounds, and David is relieved to be on the other side of a career change which he started in early 2019. He is now in his second job as a Software Developer and loves JavaScript almost as much as he once loved Mandarin Chinese, but far less than he loves his golden godess Lakshmi.
    </Paragraph>
    <Text tagName='h2' size='M'>How they met</Text>
    <Paragraph>
    &ldquo;We met the old fashioned way — on Tinder!&rdquo;
    </Paragraph>
    <Paragraph>
      Lakshmi and David have been together (pretty much literally) from when they first met in the Three Tuns pub in Aldgate East in London, on November 3rd 2020.
    </Paragraph>
    <Paragraph>
      They chatted over a pint and took an instant liking to one another. Lakshmi was impressed by David&lsquo;s biceps, and David was bowled over by Lakshmi&lsquo;s generous compliments.
    </Paragraph>
    <Paragraph>
      Lakshmi approached David with a proposition that he simply couldn&lsquo;t refuse. She told him she had an Xbox One and a new game had just come out that was co-operative multiplayer.
    </Paragraph>
    <Paragraph>
      &ldquo;Beer AND video games? I&lsquo;d better hold on to this one!&rdquo;, David thought to himself.
    </Paragraph>
    <Paragraph>
      Over the next two months, David and Lakshmi got to know each other as Leo and Vincent, the playable protagonist characters in A Way Out. As Leo and Vincent, they met each other for the first time again, escaped from prison together, evaded police, and tracked down a crime boss, all while navigating the twists and turns of the characters&lsquo; relationship.
    </Paragraph>
    <Paragraph>
      The following two years, meanwhile, have seen David and Lakshmi get to know each other in real life. This has thankfully featured far less violence and fewer encounters with police (apart from that one time). Nevertheless, the journey has been equally if not more exhilarating, as they stepped outside their comfort zones, daring to trust and support one another enough to be able to start planning a future together.
    </Paragraph>
    <Paragraph>
      In many ways, it has been all-or-nothing since the start. The day after their first date, a national lockdown was announced the very next day. This was the third such lockdown of the Covid-19 pandemic, and though we all knew the drill by this point, Lakshmi and David were faced forming a &ldquo;support bubble&rdquo; in order to be able to continue seeing each other, or waiting until after lockdown.
    </Paragraph>
    <Paragraph>
      Who would have known that the humble bubble which once supported Lakshmi and David&lsquo;s nascent relationship was to be a progenitor of nuptials?
    </Paragraph>
    <Paragraph>
      Because of the lockdown, their first months were spent in close quarters at each others&lsquo; flats, playing games, cooking exotic meals together, watching TV shows. It was only later as restrictions eased that they began to venture out to explore the streets of East London, visiting the docks to feed the ducks, and taking evening strolls by the river and across Tower Bridge.
    </Paragraph>
    <Paragraph>
      In the summer of 2022 they had the opportunity to meet each others&lsquo; parents, with Haridas and Latha flying over from Trivandrum and Chris and Martine from the Isle of Man, to spend some time testing the waters as in-laws. We knew it would work out when Martine&lsquo;s lentil sauce recipe found a new role to play as a lentil daal, accompanying Latha&lsquo;s lamb biryani.
    </Paragraph>
    <Text tagName='h2' size='M'>Getting engaged</Text>
    <Paragraph>
      The decision to get married made happened naturally and gradually as Lakshmi and David got to know each other, but as 2022 drew to a close we started thinking making it a reality. 
    </Paragraph>
    <Paragraph>
      2023 kicked off with choosing the date, and as February edged ever closer, David started planning a proper proposal to surprise Lakshmi with a ring on Valentine&lsquo;s day.
    </Paragraph>
    <Paragraph>
      Booking the day off work for both of them, David arrange a day full of romantic activities — breakfast at sunrise in a 40th-floor restaraunt, a massage workshop with roses, prosecco, and chocolates, a game of Chess which he let Lakshmi win, and an afternoon tea with a special diamond-based desert!
    </Paragraph>
    <Paragraph>
      It was the perfect day and we celebrated afterwards with another surprise — a trip back to where it all started at The Three Tuns, where Lakshmi&lsquo;s friends and colleagues were waiting with prosecco on standby to surprise her.
    </Paragraph>
    <Paragraph>
      Going straight from one whirlwind experience to another, David and Lakshmi then jetted off to India in March 2023 along with David&lsquo;s parents and three siblings for an &ldquo;official&rdquo; engagement ceremony with Lakshmi&lsquo;s extended family. You can check these out on the <Link href={{ pathname: basePath + '/photos' }}>photos</Link> page.
    </Paragraph>
    <Paragraph>
      
    </Paragraph>

    {children}
  </>
}
export default OurStoryPage;
