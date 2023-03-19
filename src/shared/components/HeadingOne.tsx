import localFont from "@next/font/local";
import { FC, PropsWithChildren } from "react";

const annissaScript = localFont({ src: "../../../public/assets/fonts/annisa.otf"});

export const HeadingOne = ({children}: PropsWithChildren) => {
  const classNames = [
    annissaScript.className,
    'text-center',
    'text-4xl',
    'sm:text-5xl',
    'md:text-6xl',
    'lg:text-7xl',
    'xl:text-8xl',
    'w-100',
    'font-medium',
    'py-8',
    'my-8',
  ].join(' ');

  return (
    <div className={classNames}>
      <h1 className='w-4/5 lg:w-3/5 mx-auto'>{ children }</h1>
    </div>
  )
}
