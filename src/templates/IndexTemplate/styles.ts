import styled from "styled-components";

export const InstagramPostsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between !important;
  width: 100%;
  margin: 0 !important;
  margin-bottom: 4rem !important;

  div {
    margin-top: 0;
  }

  img {
    height: 300px;
    width: 300px;
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
  }
`;

// cursor: pointer;

// transition: all 0.3s;

// &:hover {
//   transform: scale(1.05);
//   /* opacity: 0.8; */
// }
