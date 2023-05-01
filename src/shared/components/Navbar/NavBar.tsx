"use client";
import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import { EventType, MenuItem } from "@/shared/models";
import { dataProvider } from "@/shared/providers/dataProvider";
import styles from "./styles.module.css";
import { useSelectedLayoutSegments } from "next/navigation";

interface Props {
  eventType: EventType;
}

const { menu, active } = styles;

const menuItems = dataProvider.getMenu();

export const NavBar = ({ eventType }: Props) => {
  const [_, _path] = useSelectedLayoutSegments();
  console.log(_path);
  const path = _path || "";
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => setNavActive(!navActive);

  return (
    <nav className="absolute top-0 left-0 right-0 text-white w-full">
      <button onClick={toggleNav} className="lg:hidden absolute m-4">
        {navActive ? "✕" : "☰"}
      </button>
      <ul
        className={`${menu} ${
          navActive ? active : ""
        } flex flex-col lg:flex-row justify-center mt-12 lg:mt-6`}
      >
        {menuItems.map((menuItem: MenuItem) => {
          const { href, text } = menuItem;
          return (
            <li key={href} className="mx-4">
              <NavItem
                basePath={eventType}
                isActive={path == href}
                text={text}
                href={"/" + href}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
