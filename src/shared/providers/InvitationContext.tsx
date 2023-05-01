"use client";
import { createContext, FC, ReactNode } from "react";
import { EventType, EventTypes } from "../models";

export const InvitationContext = createContext<EventType>(
  EventTypes.WEDDING_RECEPTION
);

interface Props {
  eventType: EventType;
  children: ReactNode;
}

export const InvitationContextProvider: FC<Props> = ({
  eventType,
  children,
}: Props) => {
  return (
    <InvitationContext.Provider value={eventType}>
      {children}
    </InvitationContext.Provider>
  );
};
