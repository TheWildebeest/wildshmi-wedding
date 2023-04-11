import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { Text } from '../Text';
import { ImageProps } from 'next/dist/client/image';
import { spacing } from '@/shared/helpers';

interface Props extends PropsWithChildren {
  image: ImageProps['src'];
  altText: string;
  captionText?: string;
}

export const AccessibleImage = ({ image, altText, captionText }: Props) => {
  const margins = spacing.join(' ')
  return (
    <div className={`${margins} w-1/2 mx-auto`}>
      <figure>
        <Image src={image} alt={altText} />
        <figcaption>
          <Text tagName='div' size='XXS'>
            {captionText || altText}
          </Text>
        </figcaption>
      </figure>
    </div>
  )
}