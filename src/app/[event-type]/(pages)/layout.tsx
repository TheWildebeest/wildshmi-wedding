"use client"
import { FC, PropsWithChildren } from "react";
import { useSelectedLayoutSegment } from 'next/navigation';
import { dataProvider } from "@/shared/providers/dataProvider";
import { Text } from "@/shared/components/Text";
import { Href } from "@/shared/models";

const MainPageLayout: FC<PropsWithChildren> = ({children}: PropsWithChildren) => {
  const slug = useSelectedLayoutSegment() || '';
  const title = dataProvider.getPageTitles()[slug as Href]
  return (
    <>
      <Text size="XXL" tagName="h1">{title}</Text>
      {children}
    </>
  )
}

export default MainPageLayout;