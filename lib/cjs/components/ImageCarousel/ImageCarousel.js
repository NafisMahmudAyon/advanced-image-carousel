// src/components/Carousel.js
'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Splide, SplideTrack } from '@splidejs/react-splide';
// import React, { ReactElement } from 'react';
// import ImageCarouselItem from './ImageCarouselItem';
import '@splidejs/react-splide/css';
// import './splide.min.js'
// import "@splidejs/splide/dist/css/splide-core.min.css";
import { Arrow, Pause, Play } from '../Icon';
const ImageCarousel = ({ children, options, arrowIcon, playIcon, pauseIcon, autoplay, pagination = true, arrows = true, progressBar, arrowStyle = '', prevArrowStyle = '', nextArrowStyle = '', autoplayStyle = '', playIconStyle = "", pauseIconStyle = "", paginationStyle = "",
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
    return (_jsx(_Fragment, { children: _jsxs(Splide, { hasTrack: false, className: 'image-carousel', "aria-label": "My Favorite Images", options: options, children: [_jsx(SplideTrack, { children: children }), arrows && (_jsxs("div", { className: `${arrowStyle} splide__arrows`, children: [_jsx("button", { className: `${prevArrowStyle} splide__arrow splide__arrow--prev`, type: "button", "aria-label": "Previous slide", children: arrowIcon && arrowIcon != undefined ? arrowIcon : _jsx(Arrow, {}) }), _jsx("button", { className: `${nextArrowStyle} splide__arrow splide__arrow--next`, type: "button", "aria-label": "Next slide", children: arrowIcon && arrowIcon != undefined ? arrowIcon : _jsx(Arrow, {}) })] })), autoplay &&
                    _jsxs(_Fragment, { children: [_jsxs("button", { className: `${autoplayStyle} splide__toggle`, type: "button", children: [_jsx("span", { className: `${playIconStyle} splide__toggle__play`, children: playIcon && playIcon != undefined ? playIcon : _jsx(Play, {}) }), _jsx("span", { className: `${pauseIconStyle} splide__toggle__pause`, children: pauseIcon && pauseIcon != undefined ? pauseIcon : _jsx(Pause, {}) })] }), progressBar && (_jsx("div", { className: "splide__progress", children: _jsx("div", { className: "splide__progress__bar" }) }))] }), pagination && (_jsx("ul", { className: `${paginationStyle} splide__pagination` }))] }) }));
};
export default ImageCarousel;
