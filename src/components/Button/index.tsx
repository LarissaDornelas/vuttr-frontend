import React from "react";

import {add} from 'assets/icons'
import { Container, Icon } from "./styles";

const Button: React.FC = () => {
  return <Container onClick={() => {}}>
    <Icon src={add} alt="add"/>
    Add
    
    </Container>;
};

export default Button;
