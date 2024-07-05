'use client'
import { SplideSlide } from '@splidejs/react-splide';

interface ImageCarouselItemProps {
  children: React.ReactNode,

}

const ImageCarouselItem: React.FC<ImageCarouselItemProps> = ({children}) => {
  return (
    <SplideSlide className='mx-auto'>{children}</SplideSlide>
  )
}

export default ImageCarouselItem