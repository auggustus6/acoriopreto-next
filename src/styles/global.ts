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

  .swal2-confirm, .swal2-styled{
    background: ${(p) => p.theme.palette.primary.main} !important;
  }

  h1{
    font-size: 2.1rem;
  }

  h2{
    font-size: 2rem;
  }

  h3{
    font-size: 1.6rem;
  }

  p, option{
    font-size: 1rem;
  }

  ul, ol{
    list-style: none;
  }
  
  button {
    cursor: pointer;
    border: none;
    border-radius: 3px;
    text-align: center;
    :hover{
      opacity: 0.9;
    }
  }

  a{
    text-align: center;
    text-decoration: none;
    color: inherit;
  }

::-webkit-scrollbar {
  width: 6px;
  background: white;
  border-radius: 0;
}


::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border-radius: 0;

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
