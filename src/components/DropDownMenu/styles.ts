import styled from "styled-components";

export const DropDownContainer = styled.ul`
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 100%;

  li{
    display: none;
  }

  &:hover{
    display: block;

    li{
    display: block;
  }
  }
`;
