import FixedBackground from "@components/FixedBackground";
import Footer from "@components/Footer";
import Header from "@components/Header";
import PagePath from "@components/PagePath";
import { Container, Main, StyledForm, StyledInput } from "../../styles/contato/styles";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContactForm from "@components/FormikTextArea";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().matches(phoneRegExp, "Número inválido").required("Required"),
  message: Yup.string().min(3, "t").max(5, "b").required("kkkkkk"),
});

export default function EmpresaPage() {
  return (
    <>
      <Header />
      <Container>
        <PagePath paths={[{ name: "Home", link: "/" }]}>Contato</PagePath>
        <h1>Contato</h1>

        <Main>
          <Formik
            initialValues={{
              firstName: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched, isValid, dirty, setFieldValue }) => (
              <StyledForm>
                <StyledInput name="firstName" />
                {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}

                <StyledInput name="email" type="email" />
                {errors.email && touched.email ? <div>{errors.email}</div> : null}

                <StyledInput name="phone" type="phone" />
                {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}

                <StyledInput name="message" as="textarea" id="message" />
                <ErrorMessage name="message" component="span" className="error" />
                {/* {errors.message && touched.message ? <div>{errors.message}</div> : null} */}

                <button type="submit">Submit</button>
              </StyledForm>
            )}
          </Formik>
          {/* <ContactForm /> */}
        </Main>
      </Container>
      <Footer />
    </>
  );
}
