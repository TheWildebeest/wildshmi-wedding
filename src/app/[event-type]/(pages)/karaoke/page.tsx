"use client";
import { Paragraph } from "@/shared/components/Paragraph";
import { Text } from "@/shared/components/Text";
import Link from "next/link";
import React, { FC } from "react";
import { List } from "@/shared/components/List";
import { InfoBox } from "@/shared/components/InfoBox";
import { usePathname } from "next/navigation";

const KaraokePage: FC = () => {
  const basePath = usePathname()?.replace("/karaoke", "");

  return (
    <div className="max-w-[50em] mx-auto">
      <Text tagName="h2" size="L">
        🧑‍🎤 Your turn to be a rock star
      </Text>
      <Paragraph>
        We&lsquo;re super excited to have a live karaoke band and have YOU perform at our wedding!
      </Paragraph>
      <Paragraph>
        It&lsquo;s all the fun of karaoke, but instead of a backing track,
        you&lsquo;ll be performing with a five-piece LIVE BAND!
      </Paragraph>
      <Text tagName="h2" size="L">
        🎤 How to take part
      </Text>
      <List>
        <li>
          Look through the song list below, and choose a maximum of THREE songs
          you would like to perform.
        </li>
        <li>
          <Link target="_blank" href="https://forms.gle/NSHSsrsFNreTydPS6">
            <strong className="font-bold">Complete and submit this form</strong>
          </Link>{" "}
          to let us know your song choices.
        </li>
        <li>We&lsquo;ll get in touch to confirm which song you can perform.</li>
        <li>
          Practice the song before 26th August, so you can give it your best
          shot on the night!
        </li>
      </List>
      <Text tagName="h2" size="L">
        🎤 Song list (alphabetical by original artist)
      </Text>
      <InfoBox title="Please note:" type="info">
        Song names with an asterisk (*) are &ldquo;advance notice&rdquo; songs
        which require more preparation by the band. The band can only prepare a
        limited number of advance notice songs, so please{" "}
        <Link href={{ pathname: basePath + "/contact" }}>get in touch</Link> if
        you would like to sing one of these.
      </InfoBox>

      <Text tagName="h3" size="S">
        4 Non Blondes
      </Text>
      <List>
        <li>What&lsquo;s Up?</li>
      </List>
      <Text tagName="h3" size="S">
        Abba
      </Text>
      <List>
        <li>Dancing Queen</li>
        <li>Mamma Mia</li>
        <li>Waterloo</li>
      </List>
      <Text tagName="h3" size="S">
        AC/DC
      </Text>
      <List>
        <li>You Shook Me All Night Long</li>
        <li>Highway To Hell</li>
      </List>
      <Text tagName="h3" size="S">
        Adele
      </Text>
      <List>
        <li>Rolling In The Deep</li>
        <li>Make You Feel My Love</li>
        <li>Someone Like You*</li>
      </List>
      <Text tagName="h3" size="S">
        Aerosmith
      </Text>
      <List>
        <li>Walk this way*</li>
      </List>
      <Text tagName="h3" size="S">
        Alana Miles
      </Text>
      <List>
        <li>Black Velvet</li>
      </List>
      <Text tagName="h3" size="S">
        Alanis Morissette
      </Text>
      <List>
        <li>You Oughta Know*</li>
        <li>Hand In My Pocket</li>
      </List>
      <Text tagName="h3" size="S">
        Albert King
      </Text>
      <List>
        <li>Born Under a Bad Sign*</li>
      </List>
      <Text tagName="h3" size="S">
        America
      </Text>
      <List>
        <li>Horse with no name*</li>
      </List>
      <Text tagName="h3" size="S">
        Amy Winehouse{" "}
      </Text>
      <List>
        <li>Rehab</li>
      </List>
      <Text tagName="h3" size="S">
        Amy Winehouse/Ronson
      </Text>
      <List>
        <li>Valerie</li>
      </List>
      <Text tagName="h3" size="S">
        Andy Stewart
      </Text>
      <List>
        <li>Donald Where&lsquo;s Your Troosers*</li>
      </List>
      <Text tagName="h3" size="S">
        Andy Williams
      </Text>
      <List>
        <li>Can&lsquo;t Take My Eyes Off Of You </li>
      </List>
      <Text tagName="h3" size="S">
        Animals
      </Text>
      <List>
        <li>House of the Rising Sun</li>
      </List>
      <Text tagName="h3" size="S">
        Aretha Franklin
      </Text>
      <List>
        <li>Respect*</li>
      </List>
      <Text tagName="h3" size="S">
        Atomic Kitten
      </Text>
      <List>
        <li>Eternal Flame</li>
      </List>
      <Text tagName="h3" size="S">
        Avicii
      </Text>
      <List>
        <li>Wake Me Up</li>
      </List>
      <Text tagName="h3" size="S">
        Backstreet Boys (BSB)
      </Text>
      <List>
        <li>Everybody (Backstreet&lsquo;s Back)</li>
      </List>
      <Text tagName="h3" size="S">
        Bananarama
      </Text>
      <List>
        <li>Venus</li>
      </List>
      <Text tagName="h3" size="S">
        Bangles, The
      </Text>
      <List>
        <li>Eternal Flame</li>
      </List>
      <Text tagName="h3" size="S">
        Beastie boys
      </Text>
      <List>
        <li>Fight for your right </li>
      </List>
      <Text tagName="h3" size="S">
        Beatles
      </Text>
      <List>
        <li>A Hard Day&lsquo;s Night</li>
        <li>Hey Jude</li>
        <li>I Saw Her Standing There</li>
        <li>Twist & shout</li>
        <li>With a Little Help From My Friends</li>
        <li>Yellow Submarine</li>
      </List>
      <Text tagName="h3" size="S">
        Ben E King
      </Text>
      <List>
        <li>Stand By Me</li>
      </List>
      <Text tagName="h3" size="S">
        Bill Haley & Comets
      </Text>
      <List>
        <li>Rock Around The Clock*</li>
      </List>
      <Text tagName="h3" size="S">
        Bill Withers
      </Text>
      <List>
        <li>Lovely Day</li>
      </List>
      <Text tagName="h3" size="S">
        Billy Idol
      </Text>
      <List>
        <li>White Wedding</li>
      </List>
      <Text tagName="h3" size="S">
        Black Crows
      </Text>
      <List>
        <li>Hard To Handle</li>
      </List>
      <Text tagName="h3" size="S">
        Black Eyed Peas
      </Text>
      <List>
        <li>I Gotta Feeling</li>
      </List>
      <Text tagName="h3" size="S">
        Blackstreet
      </Text>
      <List>
        <li>No Diggity</li>
      </List>
      <Text tagName="h3" size="S">
        Blink182
      </Text>
      <List>
        <li>All the Small Things </li>
      </List>
      <Text tagName="h3" size="S">
        Blondie
      </Text>
      <List>
        <li>One Way Or Another</li>
        <li>Call Me*</li>
        <li>Denis*</li>
        <li>Denis &lsquo;88*</li>
        <li>Sunday Girl*</li>
      </List>
      <Text tagName="h3" size="S">
        Blur
      </Text>
      <List>
        <li>There&lsquo;s no other way*</li>
        <li>Park Life</li>
        <li>Song 2</li>
      </List>
      <Text tagName="h3" size="S">
        Bob Dylan
      </Text>
      <List>
        <li>Knockin&lsquo; on Heaven&lsquo;s Door</li>
        <li>Like a Rolling Stone*</li>
      </List>
      <Text tagName="h3" size="S">
        Bob Marley
      </Text>
      <List>
        <li>3 Little Birds</li>
      </List>
      <Text tagName="h3" size="S">
        Bon Jovi
      </Text>
      <List>
        <li>Living on a prayer</li>
        <li>Wanted Dead or Alive*</li>
      </List>
      <Text tagName="h3" size="S">
        Bonnie Tyler
      </Text>
      <List>
        <li>Total Eclipse of the Heart</li>
      </List>
      <Text tagName="h3" size="S">
        Bowie & Jagger
      </Text>
      <List>
        <li>Dancing in the Street*</li>
      </List>
      <Text tagName="h3" size="S">
        Boyzone
      </Text>
      <List>
        <li>No Matter What*</li>
        <li>Words*</li>
      </List>
      <Text tagName="h3" size="S">
        Britney Spears
      </Text>
      <List>
        <li>Baby One More Time </li>
      </List>
      <Text tagName="h3" size="S">
        Bruce Springsteen
      </Text>
      <List>
        <li>Dancing in the Dark</li>
      </List>
      <Text tagName="h3" size="S">
        Bruno Mars
      </Text>
      <List>
        <li>Locked Out of Heaven</li>
      </List>
      <Text tagName="h3" size="S">
        Bryan Adams
      </Text>
      <List>
        <li>Heaven</li>
        <li>Summer of &lsquo;69</li>
      </List>
      <Text tagName="h3" size="S">
        Bryan Ferry
      </Text>
      <List>
        <li>Let&lsquo;s stick together*</li>
      </List>
      <Text tagName="h3" size="S">
        Buster Poindexter
      </Text>
      <List>
        <li>Hot Hot Hot*</li>
      </List>
      <Text tagName="h3" size="S">
        Carly Rae Jepsen
      </Text>
      <List>
        <li>Call Me Maybe*</li>
      </List>
      <Text tagName="h3" size="S">
        Carly Simon
      </Text>
      <List>
        <li>You&lsquo;re So Vain</li>
      </List>
      <Text tagName="h3" size="S">
        CCR
      </Text>
      <List>
        <li>Bad Moon Rising</li>
      </List>
      <Text tagName="h3" size="S">
        Cee Lo Green
      </Text>
      <List>
        <li>F*** You (&ldquo;Forget You&rdquo;)</li>
      </List>
      <Text tagName="h3" size="S">
        Chesney Hawkes
      </Text>
      <List>
        <li>The One and Only*</li>
      </List>
      <Text tagName="h3" size="S">
        Christina Aguilera
      </Text>
      <List>
        <li>Beautiful</li>
      </List>
      <Text tagName="h3" size="S">
        Chuck Berry
      </Text>
      <List>
        <li>Johnny B. Goode</li>
      </List>
      <Text tagName="h3" size="S">
        Coldplay
      </Text>
      <List>
        <li>Yellow</li>
      </List>
      <Text tagName="h3" size="S">
        Commitments, The
      </Text>
      <List>
        <li>Take me to the River*</li>
      </List>
      <Text tagName="h3" size="S">
        Commodores
      </Text>
      <List>
        <li>Easy*</li>
      </List>
      <Text tagName="h3" size="S">
        Corinne Bailey Rae
      </Text>
      <List>
        <li>Put Your Records On</li>
      </List>
      <Text tagName="h3" size="S">
        Cornershop (Cook Remix!)
      </Text>
      <List>
        <li>Brimful of Asha (&lsquo;45)</li>
      </List>
      <Text tagName="h3" size="S">
        Cranberries
      </Text>
      <List>
        <li>Zombie</li>
      </List>
      <Text tagName="h3" size="S">
        Cream
      </Text>
      <List>
        <li>Crossroads*</li>
      </List>
      <Text tagName="h3" size="S">
        Crowded House
      </Text>
      <List>
        <li>Weather With You</li>
      </List>
      <Text tagName="h3" size="S">
        Culture Club
      </Text>
      <List>
        <li>Karma Chameleon*</li>
      </List>
      <Text tagName="h3" size="S">
        Cure, The
      </Text>
      <List>
        <li>Boys Don&lsquo;t Cry</li>
        <li>Friday I&lsquo;m in Love*</li>
      </List>
      <Text tagName="h3" size="S">
        Daft Punk
      </Text>
      <List>
        <li>Get Lucky</li>
      </List>
      <Text tagName="h3" size="S">
        Dandy Warhols
      </Text>
      <List>
        <li>Bohemian Like You</li>
      </List>
      <Text tagName="h3" size="S">
        David Bowie
      </Text>
      <List>
        <li>Ziggy Stardust</li>
        <li>Kooks*</li>
        <li>Rock &lsquo;n&lsquo; Roll Suicide*</li>
        <li>China Girl*</li>
        <li>Let&lsquo;s Dance</li>
      </List>
      <Text tagName="h3" size="S">
        David Guetta feat. Sia
      </Text>
      <List>
        <li>Titanium</li>
      </List>
      <Text tagName="h3" size="S">
        Dean Martin
      </Text>
      <List>
        <li>King of the Road*</li>
      </List>
      <Text tagName="h3" size="S">
        Deee-Lite
      </Text>
      <List>
        <li>Groove is in the Heart*</li>
      </List>
      <Text tagName="h3" size="S">
        Deep Blue Something
      </Text>
      <List>
        <li>Breakfast at Tiffanys</li>
      </List>
      <Text tagName="h3" size="S">
        Depeche Mode
      </Text>
      <List>
        <li>Just can&lsquo;t get enough</li>
      </List>
      <Text tagName="h3" size="S">
        Diana Ross
      </Text>
      <List>
        <li>Upside Down</li>
      </List>
      <Text tagName="h3" size="S">
        Dionne Warwick
      </Text>
      <List>
        <li>Walk on by*</li>
      </List>
      <Text tagName="h3" size="S">
        Dire Straits
      </Text>
      <List>
        <li>Walk Of Life</li>
        <li>Money for nothing*</li>
      </List>
      <Text tagName="h3" size="S">
        Dodgy
      </Text>
      <List>
        <li>Good Enough*</li>
      </List>
      <Text tagName="h3" size="S">
        Dolly Parton
      </Text>
      <List>
        <li>9 to 5</li>
        <li>Jolene</li>
      </List>
      <Text tagName="h3" size="S">
        Don Mclean
      </Text>
      <List>
        <li>American Pie</li>
      </List>
      <Text tagName="h3" size="S">
        Donna Summer
      </Text>
      <List>
        <li>Hot Stuff*</li>
      </List>
      <Text tagName="h3" size="S">
        Doors
      </Text>
      <List>
        <li>Roadhouse Blues</li>
        <li>Light My Fire</li>
      </List>
      <Text tagName="h3" size="S">
        Drifters, The
      </Text>
      <List>
        <li>Under the Boardwalk*</li>
      </List>
      <Text tagName="h3" size="S">
        Duffy
      </Text>
      <List>
        <li>Mercy</li>
        <li>Warwick Avenue</li>
      </List>
      <Text tagName="h3" size="S">
        Dusty Springfield
      </Text>
      <List>
        <li>Son of a preacher man</li>
      </List>
      <Text tagName="h3" size="S">
        Eagle Eye cherry
      </Text>
      <List>
        <li>Save Tonight</li>
      </List>
      <Text tagName="h3" size="S">
        Eagles
      </Text>
      <List>
        <li>Take It Easy</li>
      </List>
      <Text tagName="h3" size="S">
        Eartha Kitt
      </Text>
      <List>
        <li>Santa Baby*</li>
      </List>
      <Text tagName="h3" size="S">
        Echo & The Bunnymen
      </Text>
      <List>
        <li>The Killing Moon*</li>
      </List>
      <Text tagName="h3" size="S">
        Ed Sheeran
      </Text>
      <List>
        <li>Thinking Out Loud</li>
        <li>Bad Habits*</li>
      </List>
      <Text tagName="h3" size="S">
        Elton John
      </Text>
      <List>
        <li>Your Song</li>
      </List>
      <Text tagName="h3" size="S">
        Elvis Presley
      </Text>
      <List>
        <li>Always On My Mind</li>
        <li>Can&lsquo;t Help Falling in Love</li>
        <li>Suspicious Minds</li>
        <li>Hound Dog</li>
        <li>Jail House Rock</li>
        <li>All Shook Up</li>
      </List>
      <Text tagName="h3" size="S">
        Erasure
      </Text>
      <List>
        <li>A little respect</li>
      </List>
      <Text tagName="h3" size="S">
        Eric Clapton
      </Text>
      <List>
        <li>Wonderful Tonight</li>
      </List>
      <Text tagName="h3" size="S">
        Erma Franklin/ Dusty Springfield
      </Text>
      <List>
        <li>Piece of My Heart*</li>
      </List>
      <Text tagName="h3" size="S">
        Estelle
      </Text>
      <List>
        <li>American Boy</li>
      </List>
      <Text tagName="h3" size="S">
        Etta James
      </Text>
      <List>
        <li>At Last*</li>
      </List>
      <Text tagName="h3" size="S">
        Eurythmics
      </Text>
      <List>
        <li>Sweet Dreams*</li>
      </List>
      <Text tagName="h3" size="S">
        Eva Cassidy
      </Text>
      <List>
        <li>Take me to the River*</li>
      </List>
      <Text tagName="h3" size="S">
        Fleetwood Mac
      </Text>
      <List>
        <li>Dreams</li>
        <li>Go Your Own Way*</li>
      </List>
      <Text tagName="h3" size="S">
        Fleetwood Mac/ Santana
      </Text>
      <List>
        <li>Black Magic Woman*</li>
      </List>
      <Text tagName="h3" size="S">
        Florence & the Machine
      </Text>
      <List>
        <li>You Got the Love</li>
      </List>
      <Text tagName="h3" size="S">
        Foo Fighters
      </Text>
      <List>
        <li>Learn to fly</li>
        <li>Times Like These*</li>
      </List>
      <Text tagName="h3" size="S">
        Frank Sinatra
      </Text>
      <List>
        <li>Fly Me To The Moon</li>
        <li>My Way</li>
        <li>That&lsquo;s Life</li>
        <li>Come Fly With Me*</li>
        <li>New York New York*</li>
      </List>
      <Text tagName="h3" size="S">
        Franz Ferdinand
      </Text>
      <List>
        <li>Take Me Out</li>
      </List>
      <Text tagName="h3" size="S">
        Fratellis
      </Text>
      <List>
        <li>Chelsea Dagger</li>
      </List>
      <Text tagName="h3" size="S">
        Free
      </Text>
      <List>
        <li>Alright Now</li>
      </List>
      <Text tagName="h3" size="S">
        from Dirty Dancing
      </Text>
      <List>
        <li>(I&lsquo;ve Had) The Time of My Life</li>
      </List>
      <Text tagName="h3" size="S">
        from &lsquo;Frozen&lsquo;
      </Text>
      <List>
        <li>Let It Go*</li>
      </List>
      <Text tagName="h3" size="S">
        from &lsquo;Greatest Showman&lsquo;
      </Text>
      <List>
        <li>This Is Me*</li>
      </List>
      <Text tagName="h3" size="S">
        George Ezra
      </Text>
      <List>
        <li>Blame It On Me*</li>
        <li>Green Green Grass*</li>
        <li>Shotgun*</li>
      </List>
      <Text tagName="h3" size="S">
        George Michael
      </Text>
      <List>
        <li>Faith</li>
      </List>
      <Text tagName="h3" size="S">
        Gerry & the Pacemakers
      </Text>
      <List>
        <li>You&lsquo;ll Never Walk Alone*</li>
      </List>
      <Text tagName="h3" size="S">
        Gerry & the Pacemakers
      </Text>
      <List>
        <li>Ferry Cross the Mersey</li>
      </List>
      <Text tagName="h3" size="S">
        Girls Aloud
      </Text>
      <List>
        <li>Love Machine</li>
      </List>
      <Text tagName="h3" size="S">
        Glenn Cambell
      </Text>
      <List>
        <li>Wichita Lineman*</li>
      </List>
      <Text tagName="h3" size="S">
        Gloria Gaynor
      </Text>
      <List>
        <li>I will survive</li>
      </List>
      <Text tagName="h3" size="S">
        Gnarls Barkley
      </Text>
      <List>
        <li>Crazy </li>
      </List>
      <Text tagName="h3" size="S">
        Green Day
      </Text>
      <List>
        <li>Basket Case</li>
        <li>Good Riddance (Time Of Your Life)</li>
        <li>American Idiot*</li>
      </List>
      <Text tagName="h3" size="S">
        Guns &lsquo;n&lsquo; Roses
      </Text>
      <List>
        <li>Sweet Child of Mine</li>
      </List>
      <Text tagName="h3" size="S">
        Hot Chocolate
      </Text>
      <List>
        <li>You Sexy Thing</li>
      </List>
      <Text tagName="h3" size="S">
        Human League
      </Text>
      <List>
        <li>Don’t You want me baby</li>
      </List>
      <Text tagName="h3" size="S">
        Iggy Pop
      </Text>
      <List>
        <li>Passenger*</li>
        <li>Real Wild Child (Wild One)*</li>
      </List>
      <Text tagName="h3" size="S">
        Jam
      </Text>
      <List>
        <li>Town Called Malice</li>
      </List>
      <Text tagName="h3" size="S">
        James
      </Text>
      <List>
        <li>Sit down</li>
      </List>
      <Text tagName="h3" size="S">
        James Arthur
      </Text>
      <List>
        <li>Impossible</li>
      </List>
      <Text tagName="h3" size="S">
        James Brown
      </Text>
      <List>
        <li>I Got You (I Feel Good)</li>
      </List>
      <Text tagName="h3" size="S">
        Jason Derulo
      </Text>
      <List>
        <li>Take You Dancing*</li>
      </List>
      <Text tagName="h3" size="S">
        Jerry Lee Lewis
      </Text>
      <List>
        <li>Great Balls Of Fire*</li>
      </List>
      <Text tagName="h3" size="S">
        Jessie J
      </Text>
      <List>
        <li>Price Tag</li>
      </List>
      <Text tagName="h3" size="S">
        Jet
      </Text>
      <List>
        <li>Are You Gonna Be My Girl</li>
      </List>
      <Text tagName="h3" size="S">
        Jimi Hendrix
      </Text>
      <List>
        <li>Foxey Lady*</li>
        <li>Hey Joe*</li>
        <li>Purple Haze*</li>
      </List>
      <Text tagName="h3" size="S">
        Joan Jett & The Blackhearts
      </Text>
      <List>
        <li>I Love Rock&lsquo;n&lsquo;Roll</li>
      </List>
      <Text tagName="h3" size="S">
        Joe Cocker
      </Text>
      <List>
        <li>With a Little Help From My Friends</li>
      </List>
      <Text tagName="h3" size="S">
        Joe Cocker/Tom Jones
      </Text>
      <List>
        <li>You can leave your hat on*</li>
      </List>
      <Text tagName="h3" size="S">
        John Denver
      </Text>
      <List>
        <li>Country Roads</li>
      </List>
      <Text tagName="h3" size="S">
        John Legend
      </Text>
      <List>
        <li>All Of Me</li>
      </List>
      <Text tagName="h3" size="S">
        Johnny Cash
      </Text>
      <List>
        <li>Ring of Fire</li>
      </List>
      <Text tagName="h3" size="S">
        Journey
      </Text>
      <List>
        <li>Don&lsquo;t Stop Believin&lsquo;</li>
      </List>
      <Text tagName="h3" size="S">
        Kaizer Chiefs
      </Text>
      <List>
        <li>I Predict A Riot</li>
      </List>
      <Text tagName="h3" size="S">
        Kate Bush
      </Text>
      <List>
        <li>Hounds of Love*</li>
      </List>
      <Text tagName="h3" size="S">
        Katrina & Waves
      </Text>
      <List>
        <li>Walking On Sunshine</li>
      </List>
      <Text tagName="h3" size="S">
        Katy Perry
      </Text>
      <List>
        <li>Firework</li>
        <li>I Kissed A Girl</li>
      </List>
      <Text tagName="h3" size="S">
        Kelly Clarkson
      </Text>
      <List>
        <li>Since U Been Gone</li>
      </List>
      <Text tagName="h3" size="S">
        Kenny Rogers
      </Text>
      <List>
        <li>Gambler, The</li>
      </List>
      <Text tagName="h3" size="S">
        Kenny Rogers & Dolly Parton
      </Text>
      <List>
        <li>Islands in the Stream</li>
      </List>
      <Text tagName="h3" size="S">
        Killers
      </Text>
      <List>
        <li>Mr Brightside</li>
      </List>
      <Text tagName="h3" size="S">
        Kings of Leon
      </Text>
      <List>
        <li>Sex On Fire</li>
        <li>Use Somebody</li>
      </List>
      <Text tagName="h3" size="S">
        Kinks
      </Text>
      <List>
        <li>Lola</li>
        <li>Sunny Afternoon</li>
        <li>You Really Got Me</li>
      </List>
      <Text tagName="h3" size="S">
        Kooks, The
      </Text>
      <List>
        <li>She Moves In Her Own Way</li>
      </List>
      <Text tagName="h3" size="S">
        Kula Shaker
      </Text>
      <List>
        <li>Hush*</li>
      </List>
      <Text tagName="h3" size="S">
        Kylie Minogue
      </Text>
      <List>
        <li>Can&lsquo;t Get You Out Of My Head</li>
      </List>
      <Text tagName="h3" size="S">
        Las
      </Text>
      <List>
        <li>There She Goes*</li>
      </List>
      <Text tagName="h3" size="S">
        Lauren Hill
      </Text>
      <List>
        <li>Killing me softly*</li>
      </List>
      <Text tagName="h3" size="S">
        Led Zeppelin
      </Text>
      <List>
        <li>Rock and Roll*</li>
      </List>
      <Text tagName="h3" size="S">
        Lionel Richie
      </Text>
      <List>
        <li>All Night Long (All Night)</li>
      </List>
      <Text tagName="h3" size="S">
        Lou Reed
      </Text>
      <List>
        <li>Perfect Day*</li>
      </List>
      <Text tagName="h3" size="S">
        Louis Armstrong
      </Text>
      <List>
        <li>Wonderful World*</li>
      </List>
      <Text tagName="h3" size="S">
        Louis Prima (&lsquo;Jungle Book&lsquo;)/ Robbie Willams & Olly Murs
      </Text>
      <List>
        <li>I Wanna Be Like You</li>
      </List>
      <Text tagName="h3" size="S">
        Lumineers
      </Text>
      <List>
        <li>Ho hey</li>
      </List>
      <Text tagName="h3" size="S">
        Lynyrd Skynyrd
      </Text>
      <List>
        <li>Sweet Home Alabama</li>
      </List>
      <Text tagName="h3" size="S">
        Madness
      </Text>
      <List>
        <li>It Must Be Love</li>
      </List>
      <Text tagName="h3" size="S">
        Madonna
      </Text>
      <List>
        <li>Like a Virgin</li>
        <li>Like a Prayer*</li>
      </List>
      <Text tagName="h3" size="S">
        Mamas & Papas
      </Text>
      <List>
        <li>California Dreaming</li>
      </List>
      <Text tagName="h3" size="S">
        Marc Almond/Soft Cell
      </Text>
      <List>
        <li>Tainted Love </li>
      </List>
      <Text tagName="h3" size="S">
        Mark Ronson ft. Bruno Mars
      </Text>
      <List>
        <li>Uptown Funk</li>
      </List>
      <Text tagName="h3" size="S">
        Mary J Blige & U2
      </Text>
      <List>
        <li>One</li>
      </List>
      <Text tagName="h3" size="S">
        Mavericks
      </Text>
      <List>
        <li>Dance The Night Away</li>
      </List>
      <Text tagName="h3" size="S">
        McFadden & Whitehead
      </Text>
      <List>
        <li>Ain&lsquo;t No Stoppin&lsquo; Us Now*</li>
      </List>
      <Text tagName="h3" size="S">
        Meghan Trainor
      </Text>
      <List>
        <li>All About That Bass</li>
      </List>
      <Text tagName="h3" size="S">
        Men at work
      </Text>
      <List>
        <li>Down Under</li>
      </List>
      <Text tagName="h3" size="S">
        Meredith Brooks
      </Text>
      <List>
        <li>Bitch</li>
      </List>
      <Text tagName="h3" size="S">
        Michael Jackson
      </Text>
      <List>
        <li>Billie Jean*</li>
      </List>
      <Text tagName="h3" size="S">
        Miley Cyrus
      </Text>
      <List>
        <li>Flowers*</li>
        <li>Wrecking Ball*</li>
      </List>
      <Text tagName="h3" size="S">
        Moloko
      </Text>
      <List>
        <li>Sing It Back</li>
      </List>
      <Text tagName="h3" size="S">
        Monkees
      </Text>
      <List>
        <li>Daydream Believer</li>
        <li>I&lsquo;m a believer</li>
      </List>
      <Text tagName="h3" size="S">
        Mud/ Elvis Presley
      </Text>
      <List>
        <li>Lonely This Christmas*</li>
      </List>
      <Text tagName="h3" size="S">
        Muddy Waters/ Etta James
      </Text>
      <List>
        <li>I Just wanna make love to you*</li>
      </List>
      <Text tagName="h3" size="S">
        Muse
      </Text>
      <List>
        <li>Hysteria*</li>
        <li>Feeling Good</li>
      </List>
      <Text tagName="h3" size="S">
        Nancy Sinatra
      </Text>
      <List>
        <li>These boots are made for walking</li>
      </List>
      <Text tagName="h3" size="S">
        Natalie Imbruglio
      </Text>
      <List>
        <li>Torn</li>
      </List>
      <Text tagName="h3" size="S">
        Neil Diamond
      </Text>
      <List>
        <li>Sweet Caroline</li>
      </List>
      <Text tagName="h3" size="S">
        Neil Young
      </Text>
      <List>
        <li>Heart of Gold*</li>
      </List>
      <Text tagName="h3" size="S">
        Nina Simone
      </Text>
      <List>
        <li>My Baby Just Cares For Me</li>
      </List>
      <Text tagName="h3" size="S">
        Nirvana
      </Text>
      <List>
        <li>Smells Like Teen Spirit</li>
      </List>
      <Text tagName="h3" size="S">
        Oasis
      </Text>
      <List>
        <li>Rock&lsquo;n&lsquo;Roll Star*</li>
      </List>
      <Text tagName="h3" size="S">
        Oasis
      </Text>
      <List>
        <li>She&lsquo;s Electric</li>
      </List>
      <Text tagName="h3" size="S">
        Oasis
      </Text>
      <List>
        <li>Don&lsquo;t Look Back In Anger</li>
      </List>
      <Text tagName="h3" size="S">
        Oasis
      </Text>
      <List>
        <li>Wonderwall</li>
      </List>
      <Text tagName="h3" size="S">
        Olly Murs
      </Text>
      <List>
        <li>Dance with me tonight*</li>
      </List>
      <Text tagName="h3" size="S">
        One Direction
      </Text>
      <List>
        <li>One Way Or Another</li>
      </List>
      <Text tagName="h3" size="S">
        One Republic
      </Text>
      <List>
        <li>Counting Stars</li>
      </List>
      <Text tagName="h3" size="S">
        Otis Redding
      </Text>
      <List>
        <li>Dock Of The Bay</li>
      </List>
      <Text tagName="h3" size="S">
        OutKast
      </Text>
      <List>
        <li>Hey ya!</li>
      </List>
      <Text tagName="h3" size="S">
        Paolo Nutini
      </Text>
      <List>
        <li>New Shoes</li>
      </List>
      <Text tagName="h3" size="S">
        Patsy Cline
      </Text>
      <List>
        <li>Crazy</li>
      </List>
      <Text tagName="h3" size="S">
        Paul Weller
      </Text>
      <List>
        <li>Wild Wood*</li>
      </List>
      <Text tagName="h3" size="S">
        Petula Clark
      </Text>
      <List>
        <li>Downtown</li>
      </List>
      <Text tagName="h3" size="S">
        Pharrell Williams
      </Text>
      <List>
        <li>Happy</li>
      </List>
      <Text tagName="h3" size="S">
        Phil Collins
      </Text>
      <List>
        <li>You Can&lsquo;t Hurry Love</li>
      </List>
      <Text tagName="h3" size="S">
        Pink Floyd
      </Text>
      <List>
        <li>Another Brick In the Wall, Pt2*</li>
      </List>
      <Text tagName="h3" size="S">
        Pogues ft. Kirsty MacColl
      </Text>
      <List>
        <li>Fairytale of New York*</li>
      </List>
      <Text tagName="h3" size="S">
        Pointer Sisters
      </Text>
      <List>
        <li>I&lsquo;m So Excited</li>
      </List>
      <Text tagName="h3" size="S">
        Poison
      </Text>
      <List>
        <li>Every Rose has it&lsquo;s Thorn*</li>
      </List>
      <Text tagName="h3" size="S">
        Police
      </Text>
      <List>
        <li>Message In A Bottle</li>
        <li>Roxanne</li>
        <li>Every Breath You Take*</li>
      </List>
      <Text tagName="h3" size="S">
        Pretenders, The
      </Text>
      <List>
        <li>Don&lsquo;t Get Me Wrong*</li>
        <li>I&lsquo;ll Stand By You*</li>
      </List>
      <Text tagName="h3" size="S">
        Prince
      </Text>
      <List>
        <li>Kiss</li>
      </List>
      <Text tagName="h3" size="S">
        Proclaimers
      </Text>
      <List>
        <li>500 miles</li>
      </List>
      <Text tagName="h3" size="S">
        Queen
      </Text>
      <List>
        <li>Crazy Little Thing Called Love</li>
        <li>Don&lsquo;t stop me now</li>
        <li>We Will Rock You</li>
        <li>We Are The Champions</li>
        <li>I Want to Break Free*</li>
      </List>
      <Text tagName="h3" size="S">
        Radiohead
      </Text>
      <List>
        <li>Creep</li>
      </List>
      <Text tagName="h3" size="S">
        Rage against the machine
      </Text>
      <List>
        <li>Killing in the name </li>
      </List>
      <Text tagName="h3" size="S">
        Rainbow
      </Text>
      <List>
        <li>Since You Been Gone*</li>
      </List>
      <Text tagName="h3" size="S">
        Ray Charles
      </Text>
      <List>
        <li>I Got A Woman*</li>
      </List>
      <Text tagName="h3" size="S">
        Red Hot Chili Peppers
      </Text>
      <List>
        <li>Under The bridge</li>
        <li>Scar Tissue*</li>
      </List>
      <Text tagName="h3" size="S">
        Richie Valens
      </Text>
      <List>
        <li>La Bamba</li>
      </List>
      <Text tagName="h3" size="S">
        Ricky Martin
      </Text>
      <List>
        <li>La Vida Loca</li>
      </List>
      <Text tagName="h3" size="S">
        Righteous Brothers, The
      </Text>
      <List>
        <li>You&lsquo;ve Lost that Lovin&lsquo; Feelin&lsquo;*</li>
      </List>
      <Text tagName="h3" size="S">
        Robbie Williams
      </Text>
      <List>
        <li>Angels</li>
        <li>Let Me Entertain You</li>
      </List>
      <Text tagName="h3" size="S">
        Roberta Flack
      </Text>
      <List>
        <li>Killing me softly*</li>
      </List>
      <Text tagName="h3" size="S">
        Rod Stewart
      </Text>
      <List>
        <li>Maggie May</li>
        <li>You&lsquo;re In My Heart*</li>
        <li>Do Ya Think I&lsquo;m Sexy*</li>
      </List>
      <Text tagName="h3" size="S">
        Rolling Stones
      </Text>
      <List>
        <li>Brown Sugar</li>
        <li>Jumpin Jack Flash</li>
        <li>Paint It Black</li>
        <li>Satisfaction</li>
        <li>Route 66</li>
        <li>Sympathy For The Devil*</li>
        <li>You can&lsquo;t always get what you want*</li>
      </List>
      <Text tagName="h3" size="S">
        Ronan Keating
      </Text>
      <List>
        <li>When You Say Nothing At All</li>
      </List>
      <Text tagName="h3" size="S">
        Roxie Music
      </Text>
      <List>
        <li>Love is the Drug*</li>
      </List>
      <Text tagName="h3" size="S">
        Roy Orbison
      </Text>
      <List>
        <li>Oh Pretty Woman</li>
      </List>
      <Text tagName="h3" size="S">
        S Club 7
      </Text>
      <List>
        <li>Don&lsquo;t Stop Movin&lsquo;*</li>
      </List>
      <Text tagName="h3" size="S">
        Sam & Dave
      </Text>
      <List>
        <li>Soul Man*</li>
      </List>
      <Text tagName="h3" size="S">
        Sam Cooke
      </Text>
      <List>
        <li>Wonderful World</li>
      </List>
      <Text tagName="h3" size="S">
        Sam Smith
      </Text>
      <List>
        <li>Stay with me </li>
      </List>
      <Text tagName="h3" size="S">
        Sam Sparro
      </Text>
      <List>
        <li>Black & Gold</li>
      </List>
      <Text tagName="h3" size="S">
        Santana
      </Text>
      <List>
        <li>Smooth*</li>
      </List>
      <Text tagName="h3" size="S">
        Sex Pistols
      </Text>
      <List>
        <li>Anarchy in the UK</li>
      </List>
      <Text tagName="h3" size="S">
        Simple Minds
      </Text>
      <List>
        <li>Don&lsquo;t you forget about me</li>
        <li>Love Song*</li>
      </List>
      <Text tagName="h3" size="S">
        Sister Sledge
      </Text>
      <List>
        <li>We Are Family</li>
      </List>
      <Text tagName="h3" size="S">
        Smiths
      </Text>
      <List>
        <li>There is a light that never goes out*</li>
      </List>
      <Text tagName="h3" size="S">
        Snow Patrol
      </Text>
      <List>
        <li>Chasing Cars</li>
      </List>
      <Text tagName="h3" size="S">
        Spice Girls
      </Text>
      <List>
        <li>Wannabe</li>
      </List>
      <Text tagName="h3" size="S">
        Spin Doctors
      </Text>
      <List>
        <li>Two princes*</li>
      </List>
      <Text tagName="h3" size="S">
        Status Quo
      </Text>
      <List>
        <li>Rockin&lsquo; All Over The World</li>
      </List>
      <Text tagName="h3" size="S">
        Stealers Wheel
      </Text>
      <List>
        <li>Stuck In The Middle</li>
      </List>
      <Text tagName="h3" size="S">
        Steppen Wolf
      </Text>
      <List>
        <li>Born To Be Wild</li>
      </List>
      <Text tagName="h3" size="S">
        Stereophonics
      </Text>
      <List>
        <li>Have A Nice Day</li>
        <li>Hand bags & Glad rags*</li>
        <li>Dakota*</li>
      </List>
      <Text tagName="h3" size="S">
        Steve Harley & Cockney Rebel
      </Text>
      <List>
        <li>Make Me Smile (Come up & see me)</li>
      </List>
      <Text tagName="h3" size="S">
        Steve Miller Band
      </Text>
      <List>
        <li>Joker, The</li>
      </List>
      <Text tagName="h3" size="S">
        Stevie Wonder
      </Text>
      <List>
        <li>Signed Sealed & Delivered*</li>
        <li>Superstition</li>
      </List>
      <Text tagName="h3" size="S">
        Strokes, The
      </Text>
      <List>
        <li>Last Nite</li>
      </List>
      <Text tagName="h3" size="S">
        Supremes, The
      </Text>
      <List>
        <li>You Can&lsquo;t Hurry Love</li>
        <li>Baby Love*</li>
      </List>
      <Text tagName="h3" size="S">
        Take That
      </Text>
      <List>
        <li>Rule The World (Radio Edit)</li>
        <li>Back for Good</li>
        <li>Shine*</li>
      </List>
      <Text tagName="h3" size="S">
        Tammy Wynette
      </Text>
      <List>
        <li>Stand By Your Man*</li>
      </List>
      <Text tagName="h3" size="S">
        Temptations
      </Text>
      <List>
        <li>Get Ready</li>
        <li>My Girl</li>
      </List>
      <Text tagName="h3" size="S">
        Terence Trent D&lsquo;Arby
      </Text>
      <List>
        <li>Sign Your Name*</li>
      </List>
      <Text tagName="h3" size="S">
        The Darkness
      </Text>
      <List>
        <li>I Believe in a Thing Called Love*</li>
      </List>
      <Text tagName="h3" size="S">
        The Trammps / Tina Turner
      </Text>
      <List>
        <li>Disco Inferno*</li>
      </List>
      <Text tagName="h3" size="S">
        The Weeknd
      </Text>
      <List>
        <li>Blinding Lights*</li>
      </List>
      <Text tagName="h3" size="S">
        Them
      </Text>
      <List>
        <li>Baby Please don&lsquo;t go*</li>
      </List>
      <Text tagName="h3" size="S">
        Thin Lizzy
      </Text>
      <List>
        <li>Whiskey In The Jar</li>
      </List>
      <Text tagName="h3" size="S">
        Tight Fit
      </Text>
      <List>
        <li>The Lion Sleep Tonight*</li>
      </List>
      <Text tagName="h3" size="S">
        Tina Turner
      </Text>
      <List>
        <li>(Simply) The Best</li>
        <li>Proud Mary</li>
      </List>
      <Text tagName="h3" size="S">
        Tom Jones
      </Text>
      <List>
        <li>Delilah</li>
        <li>It&lsquo;s Not Unusual</li>
      </List>
      <Text tagName="h3" size="S">
        Tom Petty
      </Text>
      <List>
        <li>Free falling</li>
      </List>
      <Text tagName="h3" size="S">
        Tony Christie
      </Text>
      <List>
        <li>Amarillo (is this the way to)</li>
      </List>
      <Text tagName="h3" size="S">
        Toploader
      </Text>
      <List>
        <li>Dancing in the moonlight</li>
      </List>
      <Text tagName="h3" size="S">
        Tracy Chapman
      </Text>
      <List>
        <li>Revolution (Talkin&lsquo; Bout A)*</li>
      </List>
      <Text tagName="h3" size="S">
        Trad.
      </Text>
      <List>
        <li>Wild Rover</li>
      </List>
      <Text tagName="h3" size="S">
        Travolta & Newton-John
      </Text>
      <List>
        <li>Summer Nights (&lsquo;Grease&lsquo;)</li>
        <li>You&lsquo;re The One That I Want (&lsquo;Grease&lsquo;)</li>
      </List>
      <Text tagName="h3" size="S">
        T-Rex
      </Text>
      <List>
        <li>Get it on*</li>
        <li>I Love to Boogie*</li>
      </List>
      <Text tagName="h3" size="S">
        Troggs
      </Text>
      <List>
        <li>Wild Thing</li>
      </List>
      <Text tagName="h3" size="S">
        U2
      </Text>
      <List>
        <li>Angel of Harlem</li>
        <li>One</li>
        <li>With Or Without you</li>
        <li>Sunday Bloody Sunday*</li>
      </List>
      <Text tagName="h3" size="S">
        UB40 & Chrissie Hynde
      </Text>
      <List>
        <li>I Got You Babe</li>
      </List>
      <Text tagName="h3" size="S">
        Undertones
      </Text>
      <List>
        <li>Teenage Kicks</li>
      </List>
      <Text tagName="h3" size="S">
        Van Morrison
      </Text>
      <List>
        <li>Brown Eyed Girl</li>
        <li>Moondance</li>
      </List>
      <Text tagName="h3" size="S">
        Vanilla Ice
      </Text>
      <List>
        <li>Ice Ice Baby*</li>
      </List>
      <Text tagName="h3" size="S">
        Weather Girls
      </Text>
      <List>
        <li>It&lsquo;s raining men</li>
      </List>
      <Text tagName="h3" size="S">
        Wet wet wet
      </Text>
      <List>
        <li>Love is all around me</li>
      </List>
      <Text tagName="h3" size="S">
        Wham
      </Text>
      <List>
        <li>Wake Me Up Before You Go Go</li>
      </List>
      <Text tagName="h3" size="S">
        Wheatus
      </Text>
      <List>
        <li>Teenage Dirtbag</li>
      </List>
      <Text tagName="h3" size="S">
        White Stripes
      </Text>
      <List>
        <li>Seven Nation Army</li>
      </List>
      <Text tagName="h3" size="S">
        Who, The
      </Text>
      <List>
        <li>My Generation*</li>
      </List>
      <Text tagName="h3" size="S">
        Wild Cherry
      </Text>
      <List>
        <li>Play That Funky Music </li>
      </List>
      <Text tagName="h3" size="S">
        Wilson Picket
      </Text>
      <List>
        <li>Mustang Sally</li>
      </List>
      <Text tagName="h3" size="S">
        Wilson Picket / Committments
      </Text>
      <List>
        <li>In the midnight hour*</li>
      </List>
    </div>
  );
};
export default KaraokePage;
