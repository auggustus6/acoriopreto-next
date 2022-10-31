import { createGlobalStyle } from "styled-components";
import StickyBg from "@images/sticky_bg.jpg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html,body{
    font: 400 1rem "Open sans", sans-serif, Helvetica;
    color: ${(p) => p.theme.blackText};
  }

  body{
    overflow-x: hidden;
    position: absolute;
    width: 100vw;
    background-image: url(${() => StickyBg.src});
    background-attachment: fixed; 
    background-size: cover;
    z-index: -1;
  }

  li, ol{
    list-style: none;
  }
  
  button {
    cursor: pointer;
    border: none;
    border-radius: 3px;

    :hover{
      opacity: 0.9;
    }
  }

  a{
    text-decoration: none;
    color: inherit;
  }

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #868585;
}

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }  
  }
 
`;
