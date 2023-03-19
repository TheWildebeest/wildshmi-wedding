import Image from 'next/image';
import styles from "./styles.module.css";
import hero from "/public/assets/images/hero-4.webp"
import { headers } from 'next/headers';

const { heroWrapper, heroImage } = styles;

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode,
  }) {
  return (
      <>
        <div className={heroWrapper}>
          <Image
            className={heroImage}
            priority
            src={hero}
            alt="hero image example"
          />
          <header className="p-8">
            <nav>
              <ul className='uppercase font-bold'>
                <h2>Page</h2>
                <li className='hidden lg:inline-block px-2'>Our big day </li>
                <li className='hidden lg:inline-block px-2'>Our story </li>
                <li className='hidden lg:inline-block px-2'>Travel and tips </li>
                <li className='hidden lg:inline-block px-2'>RSVP </li>
                <li className='hidden lg:inline-block px-2'>Gifts </li>
                <li className='hidden lg:inline-block px-2'>Contact </li>
              </ul>

            </nav>
          </header>
        </div>
        <hr />
        {children}
      </>
  )
}
