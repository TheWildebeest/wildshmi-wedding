"use client"
import { createContext, FC, ReactNode } from 'react';
import { InvitationType, InvitationTypes } from '../models';

export const InvitationContext = createContext(InvitationTypes.EVENING_GUEST);

interface Props {
  invitationType: InvitationType,
  children: ReactNode,
}

export const InvitationContextProvider: FC<Props> = ({ invitationType, children }: Props) => {

  return (
    <InvitationContext.Provider value={invitationType}>
      { children }
    </InvitationContext.Provider>
  )
}
