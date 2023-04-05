import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  nav {
    display: flex;
    gap: 0.4rem;
    span {
      padding: 0.4rem 1rem;
      background: #ddd;
      font-size: 0.9rem;
      cursor: pointer;
      :hover {
        filter: brightness(0.8);
      }
    }
  }

  .cities-container {
    transition: 0.3s;
    overflow-y: hidden;
    overflow-x: auto;
    max-height: 320px;
    width: 100%;
    ::-webkit-scrollbar{
      height: 6px;
    }
  }

  .cities-content {
    width: 100%;
    display: flex;
    margin-top: 0.6rem;
    padding: 0.6rem;
    max-height: 320px;

    flex-direction: column;
    flex-wrap: wrap;
    font-size: 0.75rem;
    align-content: space-between;
    background: #eee;
    transition: 0.3s;
    span {
      transition: 0.3s;
      margin-right: 1rem;
    }
  }

  .active{
    filter: brightness(0.8);
  }
`;
