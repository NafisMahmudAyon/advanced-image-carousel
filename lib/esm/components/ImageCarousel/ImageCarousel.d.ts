import '@splidejs/react-splide/css';
import "@splidejs/splide/dist/css/splide-core.min.css";
interface ImageCarouselProps {
    children: React.ReactNode;
    options: object;
    platPauseButton: React.ReactElement;
}
declare const ImageCarousel: React.FC<ImageCarouselProps>;
export default ImageCarousel;
