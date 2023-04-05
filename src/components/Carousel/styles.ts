import styled from "styled-components";
import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  .slick-prev {
    position: absolute;
    left: 2rem;
    height: 50%;
    width: 2rem;
    z-index: 1;
  }
  .slick-next {
    position: absolute;
    right: 2rem;
    height: 50%;
    width: 2rem;
    z-index: 1;
  }

  .slick-prev,
  .slick-next {
    transform: scale(1.5), translateY(-50%);
    opacity: 0.8;
  }

  .slick-prev:hover,
  .slick-next:hover {
    opacity: 1;

    fill: blue;

    :before {
      color: ${(p) => p.theme.palette.primary.main};
    }
  }
`;
