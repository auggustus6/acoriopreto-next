import DefaultContainer from "@components/DefaultContainer";
import { Field, Form, Formik } from "formik";
import styled from "styled-components";

export const Container = styled(DefaultContainer)`
  margin: 0.4rem 0 2rem 0;
  .content {
    flex-direction: column;
    align-items: flex-start;
  }
  img {
    width: 100%;
    height: auto;
  }
  h1,
  h3 {
    color: ${(p) => p.theme.palette.secondary.main};
  }
  `;

export const Main = styled.main`
  
`

export const StyledForm = styled(Form)`
  
`

export const StyledInput = styled(Field)`

`