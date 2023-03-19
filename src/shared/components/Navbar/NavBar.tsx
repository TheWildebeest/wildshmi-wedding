import Link from 'next/link';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { SegmentContext } from '@/shared/SegmentContext';

export const NavBar = () => {
  const segment = useContext(SegmentContext);
  const MENU_LIST = [
    { text: 'OUR BIG DAY', href: '/our-big-day' },
    { text: 'OUR STORY', href: '/our-story' },
    { text: 'TRAVEL AND TIPS', href: '/travel-and-tips' },
    { text: 'RSVP', href: '/rsvp' },
    { text: 'GIFTS', href: '/gifts' },
    { text: 'CONTACT', href: '/contact' },
  ];
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={'/' + segment}>
          <h1 className="logo">HOME</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
