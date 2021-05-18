import React from "react";

import { Container, IconWrapper, Icon, Input } from "./styles";
import { search } from "assets/icons";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <IconWrapper>
        <Icon src={search} alt="search" />
      </IconWrapper>
      <Input placeholder="Digite o que está procurando..." />
    </Container>
  );
};

export default SearchBar;
