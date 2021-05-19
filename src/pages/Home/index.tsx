import React from "react";

import { ActionPanel, Card } from "components";
import { Title, Subtitle, Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Title>vuttr</Title>
      <Subtitle>Very Useful Tools to Remember</Subtitle>
      <ActionPanel />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Home;
