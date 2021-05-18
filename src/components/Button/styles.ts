import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.button`
  background-color: ${theme.colors.ink};
  color: ${theme.colors.darkWhite};
  height: 50px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: none;
  }
`;
