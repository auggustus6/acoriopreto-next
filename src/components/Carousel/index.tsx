import CarouselItem from "./CarouselItem";
import { StyledSlider } from "./styles";
import bg1 from "@images/banner.jpeg";
import bg2 from "@images/banner2.png";
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
      <CarouselItem imageLink={bg1.src} />
      <CarouselItem imageLink={bg2.src} />
    </StyledSlider>
  );
}
