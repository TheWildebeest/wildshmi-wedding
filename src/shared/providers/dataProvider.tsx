import { MenuItem } from "../models";

const MENU_ITEMS: MenuItem[] = [
  { text: 'HOME', href: '' },
  { text: 'OUR BIG DAY', href: 'our-big-day' },
  { text: 'OUR STORY', href: 'our-story' },
  { text: 'TRAVEL AND TIPS', href: 'travel-and-tips' },
  { text: 'RSVP', href: 'rsvp' },
  { text: 'GIFTS', href: 'gifts' },
  { text: 'CONTACT', href: 'contact' },
]

const dataProvider = {
  getMenu() {
    return MENU_ITEMS
  }
}

Object.freeze(dataProvider);

export { dataProvider };
