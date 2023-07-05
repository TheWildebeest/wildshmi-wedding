import { MenuItem, PageName, Href } from "../models";

const HREFS: Record<PageName, Href> = {
  HOME: "",
  OUR_BIG_DAY: "our-big-day",
  OUR_STORY: "our-story",
  TRAVEL_AND_TIPS: "travel-and-tips",
  RSVP: "rsvp",
  GIFTS: "gifts",
  CONTACT: "contact",
  PHOTOS: "photos",
  KARAOKE: "karaoke",
};

Object.freeze(HREFS);

const PAGE_TITLES: Record<Href, string> = {
  "": "",
  "our-big-day": "Our Big Day",
  "our-story": "Our Story",
  "travel-and-tips": "Travel & Tips",
  rsvp: "RSVP",
  gifts: "Gifts",
  contact: "Contact",
  photos: "Photos",
  karaoke: "Karaoke",
};

Object.freeze(PAGE_TITLES);

const MENU_ITEMS: MenuItem[] = [
  {
    text: "HOME",
    href: HREFS.HOME,
  },
  {
    text: "OUR STORY",
    href: HREFS.OUR_STORY,
  },
  {
    text: "OUR BIG DAY",
    href: HREFS.OUR_BIG_DAY,
  },
  {
    text: "TRAVEL AND TIPS",
    href: HREFS.TRAVEL_AND_TIPS,
  },
  {
    text: "RSVP",
    href: HREFS.RSVP,
  },
  {
    text: "GIFTS",
    href: HREFS.GIFTS,
  },
  {
    text: "CONTACT",
    href: HREFS.CONTACT,
  },
  {
    text: "PHOTOS",
    href: HREFS.PHOTOS,
  },
  {
    text: "KARAOKE",
    href: HREFS.KARAOKE,
  },
];

Object.freeze(MENU_ITEMS);

const dataProvider = {
  __MENU_ITEMS: MENU_ITEMS,

  __PAGE_TITLES: PAGE_TITLES,

  getMenu() {
    return this.__MENU_ITEMS;
  },

  getPageTitles() {
    return this.__PAGE_TITLES;
  },
};

Object.freeze(dataProvider);

export { dataProvider };
