import { Text } from "@/shared/components/Text";
import React, { FC, PropsWithChildren } from "react"

const OurStoryPage: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => (
  <>
    <Text>Our Story</Text>{children}
  </>
)
export default OurStoryPage;
