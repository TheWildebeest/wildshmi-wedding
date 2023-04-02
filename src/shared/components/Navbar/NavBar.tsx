"use client"
import React, { useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { getPathByInvitationType } from '@/shared/helpers/invitationTypeHelpers';
import { InvitationType } from '@/shared/models';
import { dataProvider } from '@/shared/providers/dataProvider';
import styles from './styles.module.css';

interface Props {
  invitationType: InvitationType;
}

const getMenuItems = (invitationType: InvitationType) => {
  return dataProvider.getMenu(getPathByInvitationType(invitationType))}

export const NavBar = ({ invitationType }: Props) => {

  const { menu, active } = styles;

  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const toggleNav = () => setNavActive(!navActive)

  return (
    <>
      <nav className='absolute top-0 left-0 right-0 text-white w-2/5 lg:w-full'>
        <button onClick={toggleNav} className='lg:hidden absolute m-4'>
          { navActive ? '✕' : '☰'}
        </button>
        <ul className={`${menu} ${navActive ? active : ""} flex flex-col lg:flex-row justify-center mt-12 lg:mt-6`}>
          {getMenuItems(invitationType).map((menuItem, idx) => (
            <li
              key={menuItem.text}
              className='mx-4'
            >
              <NavItem
                handleClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                active={activeIdx === idx} {...menuItem} />
            </li>
          ))}
        </ul>
      </nav>
    </>

  );
};
