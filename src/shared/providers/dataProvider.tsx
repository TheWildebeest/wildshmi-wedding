const MENU_LIST = [
  { text: 'OUR BIG DAY', href: '/our-big-day' },
  { text: 'OUR STORY', href: '/our-story' },
  { text: 'TRAVEL AND TIPS', href: '/travel-and-tips' },
  { text: 'RSVP', href: '/rsvp' },
  { text: 'GIFTS', href: '/gifts' },
  { text: 'CONTACT', href: '/contact' },
];

const dataProvider = {
  getMenu(homeLink: string) {
    return [
      { text: 'HOME', href: '/' + homeLink },
      ...MENU_LIST
    ]
  }
}

Object.freeze(dataProvider);

export { dataProvider }