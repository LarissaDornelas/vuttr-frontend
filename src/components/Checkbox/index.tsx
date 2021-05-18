import React from "react";

import { Container, Input, Label } from "./styles";

const Checkbox: React.FC = () => {
  return (
    <Container>
      <Input />
      <Label>search in tags only</Label>
    </Container>
  );
};

export default Checkbox;
