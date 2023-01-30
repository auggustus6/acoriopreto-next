import styled from "styled-components";

// export const InstagramPostsContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   justify-content: space-between !important;
//   width: 100%;
//   margin: 0 !important;
//   margin-bottom: 4rem !important;

//   div {
//     margin-top: 0;
//   }

//   img {
//     height: 300px;
//     width: 300px;
//     border-radius: 5px;
//     object-fit: cover;
//     object-position: center;
//   }
// `;

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
    transition: all 0.3s ease;
    img {
      flex: 1;
      height: 100%;
      width: 100%;
      max-height: 300px;
      max-width: 300px;
      border-radius: 3px;
      object-fit: cover;
    }
    &:hover {
      opacity: 0.9;
    }
  }
`;
