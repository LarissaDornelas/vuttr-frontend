import React from "react";

import { Container, Label, Field, Required, Error } from "./styles";
import { IInput } from "./types";

const Input: React.FC<IInput> = (props) => {
  const { label, error, placeholder, required, id, value, setValue, name } =
    props;
  return (
    <Container>
      <Label>
        {label}
        {required && <Required>{" *"}</Required>}
      </Label>
      <Field
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        id={id}
        name={name}
        error={!!error}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;
