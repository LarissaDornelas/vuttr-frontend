import React from "react";

import { close } from "assets/icons";
import {
  Container,
  Link,
  RemoveButton,
  Icon,
  Description,
  Tags,
} from "./styles";

const Card: React.FC = () => {
  return (
    <Container>
      <RemoveButton>
        <Icon src={close} />
      </RemoveButton>
      <Link href="http://notion.com">Notion</Link>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        ullamcorper odio et blandit elementum. Sed quis odio congue, finibus
        eros vitae, tincidunt nibh.{" "}
      </Description>
      <Tags>#organization #planning #github</Tags>
    </Container>
  );
};

export default Card;
