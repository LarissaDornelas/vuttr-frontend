import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  @media (max-width: 800px) {
    padding: 10px 5px;
  }
`;

export const Input = styled.input.attrs({
  type: "checkbox",
})`
  margin-right: 10px;
  transform: scale(1.3);
  background-color: ${theme.colors.white};
  border: none;
  border-radius: 0;
`;
export const Label = styled.label``;
