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
import { ICard } from "./types";

const Card: React.FC<ICard> = (props) => {
  const { tool, removeAction } = props;

  return (
    <Container>
      <RemoveButton onClick={() =>removeAction(tool.id)}>
        <Icon src={close} />
      </RemoveButton>
      <Link href={tool.link} target="_blank">
        {tool.title}
      </Link>
      <Description>{tool.description}</Description>
      <Tags>{tool.tags.map((tag) => `#${tag} `)}</Tags>
    </Container>
  );
};

export default Card;
