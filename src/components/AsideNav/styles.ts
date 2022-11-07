import styled from "styled-components";

export const AsideContainer = styled.aside`
  flex: 1;
  h3 {
    font-size: 0.95rem;
    font-weight: 600;
    background: ${(p) => p.theme.palette.secondary.main};
    color: white !important;
    padding: 0.2rem;
    padding-left: 0.4rem;
  }

  .phone-number {
    margin-top: 0.1rem;
    text-align: center;
    font-weight: 600;
  }
  ul {
    margin-top: 1rem;
    max-height: 350px;
    overflow-y: scroll;
  }

  a {
    padding: 0.2rem 0;
  }

  ul li {
    font-size: 0.825rem;
    padding: 0.2rem 0;
    max-width: 98%;
    margin: 0.4rem 0;
    padding-left: 0.6rem;
    border-left: 2px solid #ccc;
  }

  .active-nav,
  ul li:hover {
    border-color: ${(p) => p.theme.palette.secondary.main};
    color: ${(p) => p.theme.palette.secondary.main};
    background-color: rgba(33, 114, 179, 0.1);
    font-weight: 600;
  }

  span {
    display: block;
    padding: 0.6rem 0;
    background: ${(p) => p.theme.palette.secondary.main};
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
  }
`;
