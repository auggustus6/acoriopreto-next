import Slider from "react-slick";
import CarouselItem from "./CarouselItem";
import { StyledSlider } from "./styles";
import bg1 from "@images/bg1.jpg";
import bg2 from "@images/bg2.jpg";

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
    <StyledSlider {...settings}>
      <CarouselItem imageLink={bg1.src} />
      <CarouselItem imageLink={bg2.src} />
    </StyledSlider>
  );
}
