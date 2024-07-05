// src/components/Carousel.js
'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Splide, SplideTrack } from '@splidejs/react-splide';
// import React, { ReactElement } from 'react';
// import ImageCarouselItem from './ImageCarouselItem';
import '@splidejs/react-splide/css';
// import './splide.min.js'
import "@splidejs/splide/dist/css/splide-core.min.css";
const ImageCarousel = ({ children, options }) => {
    return (_jsx(_Fragment, { children: _jsxs(Splide, { hasTrack: false, "aria-label": "My Favorite Images", options: options, children: [_jsx(SplideTrack, { children: children }), "P", "N", _jsxs("div", { className: "splide__arrows", children: [_jsx("button", { className: "splide__arrow splide__arrow--prev", type: "button", "aria-label": "Previous slide", children: "P" }), _jsx("button", { className: "splide__arrow splide__arrow--next", type: "button", "aria-label": "Next slide", children: "N" })] }), _jsxs("button", { className: "splide__toggle", type: "button", children: [_jsx("span", { className: "splide__toggle__play", children: "Play" }), _jsx("span", { className: "splide__toggle__pause", children: "Pause" })] }), _jsx("div", { className: "splide__progress", children: _jsx("div", { className: "splide__progress__bar" }) }), _jsx("ul", { className: "splide__pagination " })] }) }));
};
export default ImageCarousel;
