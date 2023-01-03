import styled from "styled-components";

export const InstagramPostsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between !important;
  width: 100%;
  margin: 0 !important;
  margin-bottom: 4rem !important;

  a {
    max-height: 300px;
    max-width: 300px;
    flex: 1;
    transition: all .3s ease;

    img {
      flex: 1;
      height: 100%;
      width: 100%;
      border-radius: 3px;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;
