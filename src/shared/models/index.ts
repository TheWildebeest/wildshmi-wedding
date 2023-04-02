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
  href: string;
}