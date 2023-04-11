"use client"
import { FC, PropsWithChildren } from "react";
import { useSelectedLayoutSegment } from 'next/navigation';
import { dataProvider } from "@/shared/providers/dataProvider";
import { Text } from "@/shared/components/Text";
import { Href } from "@/shared/models";
import fonts from "@/shared/fonts";

const MainPageLayout: FC<PropsWithChildren> = ({children}: PropsWithChildren) => {
  const {arima} = fonts
  const slug = useSelectedLayoutSegment() || '';
  const title = dataProvider.getPageTitles()[slug as Href]
  return (
    <>
      <div className={`text-center mb-2 sm:mb-6 md:mb-12  ${arima}`}>
        <Text size="XXL" tagName="h1">{title}</Text>
      </div>
      {children}
    </>
  )
}

export default MainPageLayout;