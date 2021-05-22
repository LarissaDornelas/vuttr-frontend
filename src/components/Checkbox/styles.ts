import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  @media (max-width: 800px) {
    padding: 0;
  }
`;

export const Input = styled.input.attrs({
  type: "checkbox",
})`
  margin-right: 10px;
  transform: scale(1.3);
`;
export const Label = styled.label``;
