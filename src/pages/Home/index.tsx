import React from "react";

import { ActionPanel } from "components";
import { Title, Subtitle, Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Title>vuttr</Title>
      <Subtitle>Very Useful Tools to Remember</Subtitle>
      <ActionPanel />
    </Container>
  );
};

export default Home;
