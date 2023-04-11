
import fonts from '@/shared/fonts'
import React, { FC, PropsWithChildren } from "react";
import { spacing } from '@/shared/helpers';

type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL' | 'XXXXL';

interface Props extends PropsWithChildren {
  className?: HTMLParagraphElement['className'];
}

const defaultClasses = [
  ...spacing,
  'font-light',
  'text-sm',
  'lg:text-lg',
  'xl:text-xl',
];

export const Paragraph: FC<Props> = ({children, className = '' }: Props) => {
  return (
      <p className={defaultClasses.join(' ').concat(className)}>{ children }</p>
  )
}
