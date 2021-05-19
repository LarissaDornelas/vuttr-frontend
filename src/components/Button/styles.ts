import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.button`
  background-color: ${theme.colors.blue};
  color: ${theme.colors.darkWhite};
  height: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${theme.colors.darkBlue};
  }
`;

export const Icon = styled.img`
  max-height: 16px;
  margin-right: 8px;
`;
