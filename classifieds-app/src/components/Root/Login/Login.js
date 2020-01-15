import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import TextInput from "#root/components/shared/TextInput";

const Label = styled.label`
  display: block;

  :not(:first-child) {
    margin-top: .75rem;
  }
`;

const LabelText = styled.div`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const Login = () => {
  const { 
    formState: { isSubmitting },
    handleSubmit,
    register
  } = useForm();

  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>
        <LabelText>
          Email
        </LabelText>
        <TextInput disabled={isSubmitting} name="email" type="email" ref={register} />
      </Label>
      <Label>
        <LabelText>
          Password
        </LabelText>
        <TextInput disabled={isSubmitting} name="password" type="password" ref={register} />
      </Label>
    </form>
  );
}

export default Login;