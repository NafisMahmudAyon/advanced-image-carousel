// src/components/Carousel.js
'use client'
import { Splide, SplideTrack, Options } from '@splidejs/react-splide';
// import React, { ReactElement } from 'react';
// import ImageCarouselItem from './ImageCarouselItem';
// import '@splidejs/react-splide/css'
// import './splide.min.js'
import "@splidejs/splide/dist/css/splide.min.css";
import { Arrow, Pause, Play } from '../Icon';
// import { useEffect } from 'react';


// interface BreakpointOptions {
//   label?: string;
//   labelledby?: string;
//   rewind?: boolean;
//   speed?: number;
//   rewindSpeed?: number;
//   rewindByDrag?: boolean;
//   width?: string;
//   height?: string;
//   fixedWidth?: string;
//   fixedHeight?: string;
//   heightRatio?: number;
//   perPage?: number;
//   perMove?: number;
//   clones?: number;
//   focus?: number | 'center' | false;
//   gap?: string;
//   padding?: string | { left: string, right: string, top: string, bottom: string };
//   arrows?: boolean;
//   pagination?: boolean;
//   paginationKeyboard?: boolean;
//   paginationDirection?: 'ltr' | 'rtl' | 'ttb' | 'btt';
//   easing?: string;
//   easingFunc?: string;
//   drag?: boolean;
//   snap?: boolean;
//   dragMinThreshold?: number | { mouse: number, touch: number };
//   flickPower?: number;
//   flickMaxPages?: number;
//   keyboard?: boolean;
//   direction?: 'ltr' | 'rtl' | 'ttb' | 'btt';
//   destroy?: () => void;
// }

// interface SliderOptions extends BreakpointOptions {
//   type?: 'slide' | 'loop' | 'fade';
//   role?: string;
//   autoWidth?: boolean;
//   autoHeight?: boolean;
//   start?: number;
//   cloneStatus?: boolean;
//   noDrag?: string;
//   waitForTransition?: boolean;
//   arrowPath?: string;
//   autoplay?: boolean | 'pause';
//   interval?: number;
//   pauseOnHover?: boolean;
//   pauseOnFocus?: boolean;
//   resetProgress?: boolean;
//   lazyLoad?: boolean;
//   preloadPages?: number;
//   wheel?: boolean;
//   wheelMinThreshold?: number;
//   wheelSleep?: number;
//   releaseWheel?: boolean;
//   cover?: boolean;
//   slideFocus?: boolean;
//   focusableNodes?: string;
//   isNavigation?: boolean;
//   trimSpace?: boolean;
//   omitEnd?: boolean;
//   updateOnMove?: boolean;
//   mediaQuery?: 'min' | 'max';
//   live?: boolean;
//   breakpoints?: { [key: string]: BreakpointOptions };
//   i18n?: { [key: string]: string };
//   destroy?: () => void;
// }

interface ImageCarouselProps {
  children: React.ReactNode;
  options: Options;
  playPauseButton?: React.ReactElement;
  arrowIcon?: React.ReactElement;
  playIcon?: React.ReactElement;
  pauseIcon?: React.ReactElement;
  /**
     * The type of the slider.
     * - 'slide': A slider with the slide transition
     * - 'loop' : A carousel slider
     * - 'fade' : A slider with the fade transition. This does not support the perPage option.
     */
  autoplay?: boolean;
  pagination?: boolean;
  arrows?: boolean;
  progressBar?: boolean;
  arrowStyle?: string;
  prevArrowStyle?: string;
  nextArrowStyle?: string;
  autoplayStyle?: string;
  playIconStyle?: string;
  pauseIconStyle?: string;
  paginationBodyStyle?: string;
  paginationStyle?: string;
  paginationActiveStyle?: string;
}


const ImageCarousel: React.FC<ImageCarouselProps> = ({
  children, options, arrowIcon, playIcon, pauseIcon, autoplay, pagination=true, arrows = true, progressBar, arrowStyle = '', prevArrowStyle = '', nextArrowStyle = '', autoplayStyle = '',  playIconStyle ="", pauseIconStyle ="",  paginationStyle="", 
  // paginationBodyStyle="", paginationActiveStyle=""
}) => {

  // console.log(paginationStyle.length)
  // useEffect(() => {
  //   const updatePaginationClasses = () => {
  //     const paginationItems = document.querySelectorAll('.image-carousel > .splide__pagination__page');
  //     paginationItems.forEach(item => {
  //       if (paginationStyle) {
  //         paginationStyle.split(' ').forEach(cls => item.classList.add(cls));
  //       }
  //       if (item.classList.contains('is-active') && paginationActiveStyle) {
  //         paginationActiveStyle.split(' ').forEach(cls => item.classList.add(cls));
  //       }
  //     });
  //   };
  //   // if(paginationStyle.length > 0 && paginationActiveStyle.length > 0) {
  //   updatePaginationClasses();
  // // }
  // }, [paginationStyle, paginationActiveStyle]);


  return (
    <>
      <Splide hasTrack={false} className='image-carousel' aria-label="My Favorite Images" options={options}>
        <SplideTrack>{children}</SplideTrack>
        {arrows && (
          <div className={`${arrowStyle} splide__arrows`}>
            <button
              className={`${prevArrowStyle} splide__arrow splide__arrow--prev`}
              type="button"
              aria-label="Previous slide"
            >
              {arrowIcon && arrowIcon != undefined ? arrowIcon : <Arrow />}
            </button>
            <button
              className={`${nextArrowStyle} splide__arrow splide__arrow--next`}
              type="button"
              aria-label="Next slide"
            >
              {arrowIcon && arrowIcon != undefined ? arrowIcon : <Arrow />}
            </button>
          </div>
        )}
        {autoplay &&
          <>
            <button className={`${autoplayStyle} splide__toggle`} type="button">
              <span className={`${playIconStyle} splide__toggle__play`}>
                {playIcon && playIcon != undefined ? playIcon : <Play />}
              </span>
              <span className={`${pauseIconStyle} splide__toggle__pause`}>
                {pauseIcon && pauseIcon != undefined ? pauseIcon : <Pause />}
              </span>
            </button>
            {progressBar && (
              <div className="splide__progress">
                <div className="splide__progress__bar" />
              </div>
            )}
          </>
        }
        {pagination && (
          <ul className={`${paginationStyle} splide__pagination`}></ul>)}
      </Splide>
    </>
  );
};

export default ImageCarousel;
