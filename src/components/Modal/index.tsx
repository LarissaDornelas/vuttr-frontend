import React from "react";

import {} from "components";
import {
  Container,
  ModalWrapper,
  ActionWrapper,
  ActionsContainer,
  Title,
  Content,
  CloseButton,
  Icon,
} from "./styles";
import Button from "components/Button";
import { IModal } from "./types";
import { close } from "assets/icons";
import Loading from "components/Loading";
import { theme } from "styles/theme";

const Modal: React.FC<IModal> = (props) => {
  const { children, onClose, title, actionConfirm, loading } = props;
  return (
    <Container>
      <ModalWrapper>
        <CloseButton onClick={onClose}>
          <Icon src={close} />
        </CloseButton>
        <Content>
          <Title>{title}</Title>
          {children}
          <ActionsContainer>
            <ActionWrapper>
              <Button onClick={onClose} height={40} variant={"secondary"}>
                Cancel
              </Button>
            </ActionWrapper>
            <ActionWrapper>
              <Button onClick={actionConfirm} height={40}>
                {loading ? (
                  <Loading color={theme.colors.white} size={15} />
                ) : (
                  "Confirm"
                )}
              </Button>
            </ActionWrapper>
          </ActionsContainer>
        </Content>
      </ModalWrapper>
    </Container>
  );
};

export default Modal;
