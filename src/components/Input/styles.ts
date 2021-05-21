import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px; ;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: ${theme.colors.primary};
`;
export const Field = styled.input.attrs({
  type: "text",
})<{ error?: boolean }>`
  height: 45px;
  background-color: ${({ error }) =>
    error ? theme.colors.lightError : theme.colors.darkerWhite};
  border: ${({ error }) => (error ? theme.colors.error : "none")};
  border-radius: 5px;
  padding: 0 20px;
  color: ${({ error }) => (error ? theme.colors.error : theme.colors.primary)};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ error }) =>
      error ? theme.colors.error : theme.colors.ligherInk};
  }
`;
export const Error = styled.span`
  text-align: right;
  font-size: 14px;
  margin-top: 10px;
  color: ${theme.colors.error};
`;

export const Required = styled.span`
  color: ${theme.colors.lightInk};
`;
