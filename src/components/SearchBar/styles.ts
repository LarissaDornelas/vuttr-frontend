import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  height: 50px;
  background-color: ${theme.colors.white};
  border-radius: 5px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 60px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  max-height: 20px;
`;

export const Input = styled.input`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  color: ${theme.colors.ink};

  &:focus {
    outline: none;
  }
`;
