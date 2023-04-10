export type InvitationType = 'Day guest'|'Evening guest';
export type EventType = 'wedding'|'wedding-reception';
export type EventName = 'Wedding'|'Wedding Reception';

export enum EventTypes {
  WEDDING = 'wedding',
  WEDDING_RECEPTION = 'wedding-reception',
}

export enum EventNames {
  'wedding' = 'Wedding',
  'wedding-reception' = 'Wedding Reception',
}

export interface MenuItem {
  text: string;
  href: Href;
}

export type PageName =
  | 'HOME'
  | 'OUR_BIG_DAY'
  | 'OUR_STORY'
  | 'TRAVEL_AND_TIPS'
  | 'RSVP'
  | 'GIFTS'
  | 'CONTACT'

export type Href =
  | ''
  | 'our-big-day'
  | 'our-story'
  | 'travel-and-tips'
  | 'rsvp'
  | 'gifts'
  | 'contact'