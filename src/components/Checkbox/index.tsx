import React from "react";

import { Container, Input, Label } from "./styles";
import { ICheckbox } from "./types";

const Checkbox: React.FC<ICheckbox> = (props) => {
  const { setValue } = props;
  return (
    <Container>
      <Input
        onChange={(e) => {
          setValue(e.target.checked);
        }}
      />
      <Label>search in tags only</Label>
    </Container>
  );
};

export default Checkbox;
