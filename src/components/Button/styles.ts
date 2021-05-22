import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.button<{
  height?: number;
  variant?: "primary" | "secondary";
}>`
  background-color: ${({ variant }) =>
    variant === "secondary"
      ? theme.colors.mostLightestBlue
      : theme.colors.blue};
  color: ${({ variant }) =>
    variant === "secondary" ? theme.colors.blue : theme.colors.darkWhite};
  height: ${({ height }) => (height ? height : 50)}px;
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
    background-color: ${({ variant }) =>
      variant === "secondary"
        ? theme.colors.lightestBlue
        : theme.colors.darkBlue};
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Icon = styled.img`
  max-height: 16px;
  margin-right: 8px;
`;
