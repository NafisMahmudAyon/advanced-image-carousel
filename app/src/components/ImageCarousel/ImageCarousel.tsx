// src/components/Carousel.js
'use client'
import { Splide, SplideTrack } from '@splidejs/react-splide';
// import React, { ReactElement } from 'react';
// import ImageCarouselItem from './ImageCarouselItem';
import '@splidejs/react-splide/css'
// import './splide.min.js'
import "@splidejs/splide/dist/css/splide-core.min.css";

interface ImageCarouselProps {
  children: React.ReactNode,
  options: object,
  platPauseButton: React.ReactElement

}


const ImageCarousel: React.FC<ImageCarouselProps> = ({
  children, options
}) => {


  return (
    <>
      <Splide hasTrack={false} aria-label="My Favorite Images" options={options}>
        {/* {React.Children.map(children, (child: ReactElement) => {
          if (React.isValidElement(child) && child.type === ImageCarouselItem) {
            return child;
          }
          return null;
        })} */}
        <SplideTrack>{children}</SplideTrack>
        {/* <div className=" bg-white splide__arrows"> */}
          {/* <div className="prev bg-red-500 splide__arrow splide__arrow--prev"> */}
            {/* {prevIcon.options.position == "before" && (
              // <span
              //   className="icon"
              //   dangerouslySetInnerHTML={{ __html: prevIconHtml }}
              // />
            )} */}

            {/* {prev.options.text.length > 0 && (
              <span> {prev.options.text} </span>
            )} */}
P
            {/* {prevIcon.options.position == "after" && (
              <span
                className="icon"
                dangerouslySetInnerHTML={{ __html: prevIconHtml }}
              />
            )} */}
          {/* </div> */}
          {/* <div className="next splide__arrow splide__arrow--next"> */}
            {/* {nextIcon.options.position == "before" && (
              <span
                className="icon"
                dangerouslySetInnerHTML={{ __html: nextIconHtml }}
              />
            )} */}
N
            {/* {next.options.text.length > 0 && (
              <span> {next.options.text} </span>
            )}

            {nextIcon.options.position == "after" && (
              <span
                className="icon"
                dangerouslySetInnerHTML={{ __html: nextIconHtml }}
              />
            )} */}
          {/* </div> */}
        {/* </div> */}
        <div className="splide__arrows">
          <button
            className="splide__arrow splide__arrow--prev"
            type="button"
            aria-label="Previous slide"
          >P
          </button>
          <button
            className="splide__arrow splide__arrow--next"
            type="button"
            aria-label="Next slide"
          >N
          </button>
        </div>
        <button className="splide__toggle" type="button">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button>
        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>
        <ul className="splide__pagination "></ul>
      </Splide>
    </>
  );
};

export default ImageCarousel;
