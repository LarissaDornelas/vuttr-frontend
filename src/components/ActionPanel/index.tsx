import React from "react";

import { SearchBar, Checkbox, Button } from "components";
import { ActionWrapper, Container } from "./styles";

const ActionPanel: React.FC = () => {
  return (
    <Container>
      <ActionWrapper flex={3} justify="space-between">
        <SearchBar />
        <Checkbox />
      </ActionWrapper>
      <ActionWrapper>
        <Button />
      </ActionWrapper>
    </Container>
  );
};

export default ActionPanel;
