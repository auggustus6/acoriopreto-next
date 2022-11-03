import styled, { css } from "styled-components";

export const ContainerMain = styled.div`
  max-width: 140rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerInputs = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  gap: 2rem;
`;

export const ContentOne = styled.div`
  display: flex;
  gap: 1rem;

  input {
    width: 28rem;
  }

  @media (max-width: 700px) {
    input {
      width: 24rem;
    }
  }

  @media (max-width: 610px) {
    input {
      width: 18rem;
    }
  }

  @media (max-width: 482px) {
    input {
      width: 13rem;
    }
  }
`;

export const ContentTwo = styled.div`
  display: flex;
  gap: 1rem;

  input {
    width: 28rem;
  }

  @media (max-width: 700px) {
    input {
      width: 24rem;
    }
  }

  @media (max-width: 610px) {
    input {
      width: 18rem;
    }
  }

  @media (max-width: 482px) {
    input {
      width: 13rem;
    }
  }
`;

export const ContainerTextArea = styled.div`
  margin: 2.4rem 0 2.4rem;

  textarea {
    width: 100%;
    height: 16rem;
    padding: 1.2rem 1.6rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    outline: none;
    font-size: 1.8rem;
    color: #9b9b9b;
  }
`;

export const ContainerForm = styled.div`
  ${({ theme }) => css`
    max-width: 66rem;
    text-align: center;
    margin-top: -5rem;
    background: #fff;
    border: 4px solid blue
    padding: 3rem;

    button {
      cursor: pointer;
      width: 100%;
      background: black
      color: white
      font-weight: 700;
      padding: 1.2rem 2.4rem;
      border-radius: 37px;
      font-size: 1.8rem;
    }

    button:hover {
      opacity: 0.9;
    }

    @media (max-width: 700px) {
      width: 85%;
    }

    @media (max-width: 510px) {
      width: 85%;
    }
  `}

  .input-error {
    border-color: red;
  }

  .error {
    color: red;
    font-size: 1rem;
  }

  .disabled-btn {
    cursor: not-allowed;
    background: #242428;
  }
`;

export const FormContact = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;

  p {
    max-width: 59rem;
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
    font-weight: 500;
  }

  input {
    padding: 1.2rem 1.6rem;
    gap: 10px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    outline: none;
  }
`;