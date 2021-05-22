import React from "react";

import { SearchBar, Checkbox, Button } from "components";
import { ActionWrapper, Container } from "./styles";
import { add } from "assets/icons";
import { IActionPannel } from "./types";

const ActionPanel: React.FC<IActionPannel> = (props) => {
  const { handleSearch, handleSearchByTag, onClickAddButton } = props;
  return (
    <Container>
      <ActionWrapper flex={4} justify="space-between">
        <SearchBar setValue={handleSearch} />
        <Checkbox setValue={handleSearchByTag} />
      </ActionWrapper>
      <ActionWrapper justify="flex-end" mobileHeight={45}>
        <Button icon={add} onClick={onClickAddButton}>
          Add
        </Button>
      </ActionWrapper>
    </Container>
  );
};

export default ActionPanel;
