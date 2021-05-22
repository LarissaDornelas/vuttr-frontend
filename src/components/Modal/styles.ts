import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  background-color: rgb(0 0 0 / 45%);
  left: 0;
  top: 0;
  bottom: 0;
`;

export const ModalWrapper = styled.div`
  min-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 10px 10px #0000000d;
  border-radius: 5px;
  margin: 20px 0;
  position: relative;
  box-sizing: border-box;
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    padding: 35px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.h3`
  margin-top: 0;
`;
export const Description = styled.p``;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const ActionWrapper = styled.div`
  width: 100px;
  display: flex;
  margin: 0px 5px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  z-index: 1;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    right: 30px;
    top: 30px;
  }
`;

export const Icon = styled.img`
  max-height: 12px;
`;
