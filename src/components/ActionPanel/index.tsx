import React from "react";

import { SearchBar, Checkbox, Button } from "components";
import { ActionWrapper, Container } from "./styles";

const ActionPanel: React.FC = () => {
  return (
    <Container>
      <ActionWrapper flex={4} justify="space-between">
        <SearchBar />
        <Checkbox />
      </ActionWrapper>
      <ActionWrapper justify="flex-end">
        <Button />
      </ActionWrapper>
    </Container>
  );
};

export default ActionPanel;
