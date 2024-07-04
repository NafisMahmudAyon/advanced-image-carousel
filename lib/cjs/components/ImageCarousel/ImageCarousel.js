// src/components/Carousel.js
'use client';
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Splide } from '@splidejs/react-splide';
const ImageCarousel = ({ children, options }) => {
    return (_jsx(_Fragment, { children: _jsx(Splide, { "aria-label": "My Favorite Images", options: options, children: children }) }));
};
export default ImageCarousel;
