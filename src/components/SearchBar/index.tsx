import React, { memo } from "react";

import { Container, IconWrapper, Icon, Input } from "./styles";
import { search } from "assets/icons";
import { ISearchBar } from "./types";

const SearchBar: React.FC<ISearchBar> = (props) => {
  const { setValue } = props;

  return (
    <Container>
      <IconWrapper>
        <Icon src={search} alt="search" />
      </IconWrapper>
      <Input
        placeholder="Digite o que está procurando..."
        onChange={(e) => setValue(e.target.value)}
      />
    </Container>
  );
};

export default memo(SearchBar);
