import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const Input = styled.input.attrs({
  type: "checkbox",
})`
  margin-right: 10px;
`;
export const Label = styled.label``;
