import Image from 'next/image'
import { PropsWithChildren } from 'react'
import { Text } from '../Text';
import { StaticImageData } from 'next/dist/client/image';
import { imageSpacing } from '@/shared/helpers';

interface Props extends PropsWithChildren {
  image: StaticImageData;
  altText: string;
  captionText?: string;
}

export const AccessibleImage = ({ image, altText, captionText }: Props) => {
  let widthClasses: string = '';

  const { height, width } = image;
  const orientation = height >= width
    ? 'Portrait'
    : 'Landscape';
  if (orientation === 'Portrait') widthClasses = 'w-1/2 max-w-md';
  if (orientation === 'Landscape') widthClasses = 'w-2/3 max-w-xl';

  return (
    <div className={`${imageSpacing.join(' ')} ${widthClasses} mx-auto`}>
      <figure>
        <Image className='w-full' src={image} alt={altText} />
        <figcaption>
          <Text tagName='div' size='XXS'>
            {captionText || altText}
          </Text>
        </figcaption>
      </figure>
    </div>
  )
}