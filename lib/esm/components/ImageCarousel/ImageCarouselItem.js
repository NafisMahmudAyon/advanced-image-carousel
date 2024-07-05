'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { SplideSlide } from '@splidejs/react-splide';
const ImageCarouselItem = ({ children }) => {
    return (_jsx(SplideSlide, { className: 'mx-auto', children: children }));
};
export default ImageCarouselItem;
