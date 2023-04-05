import React from "react";
import * as Yup from "yup";
import { withFormik } from "formik";
import styled, { css } from "styled-components";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

const inputStyle = css`
  width: 76%;
  height: 2.4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid #ccc;
  border-radius: 2px;

  :focus {
    border-color: ${(p) => p.theme.palette.primary.main};
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;

  div {
    label {
      display: block;
      font-size: 0.8rem;
      margin-bottom: 0.2rem;
    }
  }
  span {
    display: block;
    color: red;
    font-size: 0.8rem;
  }

  button {
    ${inputStyle}
    text-align: center;
    padding: 0;
    margin-top: 1rem;
    transition: 0.2s;
    border-radius: 7px;
    :hover {
      background: ${(p) => p.theme.palette.primary.main};
      color: white;
    }
  }
  textarea {
    padding-top: 0.6rem;
    resize: vertical;
    min-height: 6rem;
    font-size: 1rem;
  }
`;

const Input = styled.input`
  ${inputStyle}
`;

const Select = styled.select`
  ${inputStyle}
  padding-left: 1rem;
`;

const phoneNumber = (phone: string) => {
  phone = phone.replace(/[^\d]/g, "");

  if (phone.length > 2) {
    phone = phone.replace(/^(\d{2})(\d*)/, "($1) $2");
  }
  if (phone.length > 9) {
    phone = phone.replace(/^(.*)(\d{4})$/, "$1-$2");
  }

  return phone;
};

const MyForm = (props: any) => {
  const { values, touched, errors, handleChange, handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <Input value={values.name} onChange={handleChange} name="name" />
        {errors.name && touched.name && <span id="feedback">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <Input value={values.email} onChange={handleChange} name="email" />
        {errors.email && touched.email && <span id="feedback">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="phone">Telefone:</label>
        <Input value={values.phone} onChange={handleChange} name="phone" />
        {errors.phone && touched.phone && <span id="feedback">{errors.phone}</span>}
      </div>
      <div>
        <label htmlFor="howfind">Como nos conheceu?</label>
        <Select value={values.howfind} onChange={handleChange} name="howfind">
          <option value="">-- Selecione --</option>
          <option value="Busca do Google">Busca do Google</option>
          <option value="Outros Buscadores">Outros Buscadores</option>
          <option value="Links patrocinados">Links patrocinados</option>
          <option value="Outros Anúncios">Outros Anúncios</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Google+">Google+</option>
          <option value="Indicação">Indicação</option>
          <option value="Outros">Outros</option>
        </Select>
        {errors.howfind && touched.howfind && <span id="feedback">{errors.howfind}</span>}
      </div>
      <div>
        <label htmlFor="message">Mensagem:</label>
        <Input as="textarea" value={values.message} onChange={handleChange} name="message" />
        {errors.message && touched.message && <span id="feedback">{errors.message}</span>}
      </div>
      <div>
        <ReCAPTCHA sitekey="Your client site key" onChange={(evt: any) => console.log(evt)} />
      </div>
      <button type="submit">ENVIAR</button>
    </Form>
  );
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = Yup.object().shape({
  name: Yup.string().min(2, "Muito curto").max(50, "Muito longo").required("Obrigatório"),
  email: Yup.string().email("Email inválido!").required("Obrigatório"),
  phone: Yup.string()
    .matches(phoneRegExp, "Número de telefone inválido")
    .required("Obrigatório"),
  howfind: Yup.string().required("Obrigatório"),
  message: Yup.string()
    .min(10, "Mensagem curta")
    .max(1000, "Mensagem muito longa, limite de mil characteres"),
});

export const CustomForm = withFormik({
  mapPropsToValues: () => ({ name: "", email: "", phone: "", message: "", howfind: "" }),
  handleSubmit: async (values, { setSubmitting, resetForm, }) => {
    const res = await fetch("api/send_email", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(values),
    });
    if (res.status == 200) {
      Swal.fire("Mensagem Enviada com Sucesso!");
      setSubmitting(false);
      resetForm();
    }
  },
  validationSchema: formSchema,
})(MyForm);
