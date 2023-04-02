import React, { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
}

const OurBigDayPage = ({ children }: Props) => <><h2>Our big day</h2>{children}</>

export default OurBigDayPage;
