import styled from "styled-components";
import Slider from "react-slick";

export const StyledSlider = styled(Slider)`
  .slick-prev {
    left: 2rem;
    z-index: 1;
  }
  .slick-next {
    right: 2rem;
    
  }

  .slick-prev, .slick-next{
    transform: scale(1.5);
    opacity: 0.4;
  }

  .slick-prev:hover, .slick-next:hover{
    opacity: 1;
  }
`;
