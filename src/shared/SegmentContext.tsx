import { createContext, PropsWithChildren, ReactNode, useContext, useState } from 'react';

export const SegmentContext = createContext('');

interface Props {
  segment: string,
  children: ReactNode
}

export const SegmentContextProvider = ({ segment, children }: Props) => {

  return (
    <SegmentContext.Provider value={segment}>
      { children }
    </SegmentContext.Provider>
  )
}