// src/components/Carousel.js
'use client'
import { Splide } from '@splidejs/react-splide';
// import React, { ReactElement } from 'react';
// import ImageCarouselItem from './ImageCarouselItem';

interface ImageCarouselProps {
  children: React.ReactNode,
  options: object,
 
}


const ImageCarousel: React.FC<ImageCarouselProps> = ({
  children, options
}) => {
  

  return (
    <>
      <Splide aria-label="My Favorite Images" options={options}>
        {/* {React.Children.map(children, (child: ReactElement) => {
          if (React.isValidElement(child) && child.type === ImageCarouselItem) {
            return child;
          }
          return null;
        })} */}
        {children}
      </Splide>
    </>
  );
};

export default ImageCarousel;
