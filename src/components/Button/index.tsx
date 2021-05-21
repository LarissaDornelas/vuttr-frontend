import React from "react";

import { Container, Icon } from "./styles";
import { IButton } from "./types";

const Button: React.FC<IButton> = (props) => {
  const { children, icon, onClick } = props;
  return (
    <Container onClick={onClick} {...props}>
      {icon && <Icon src={icon} alt="icon" />}
      {children}
    </Container>
  );
};

export default Button;
