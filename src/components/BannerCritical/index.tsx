import React from "react";

import { whiteClose as close } from "assets/icons";

import { Container, Message, Icon, CloseButton, CloseIcon } from "./styles";
import { IBannerCritical } from "./types";

const BannerCritical: React.FC<IBannerCritical> = (props) => {
  const { message, type, onClose } = props;

  return (
    <Container type={type}>
      <CloseButton onClick={onClose}>
        <CloseIcon src={close} />
      </CloseButton>
      <Icon></Icon>
      <Message>{message}</Message>
    </Container>
  );
};

export default BannerCritical;
