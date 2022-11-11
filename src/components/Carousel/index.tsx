import CarouselItem from "./CarouselItem";
import { StyledSlider } from "./styles";
import styles from "./styles.module.css";

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <StyledSlider {...settings} className={styles.reactSlickerCarousel}>
      <CarouselItem imageLink="/img/banner.jpeg" />
      <CarouselItem imageLink="/img/banner2.png" />
    </StyledSlider>
  );
}
