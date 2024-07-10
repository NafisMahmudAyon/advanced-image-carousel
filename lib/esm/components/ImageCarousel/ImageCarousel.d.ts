import { Options } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
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
declare const ImageCarousel: React.FC<ImageCarouselProps>;
export default ImageCarousel;
