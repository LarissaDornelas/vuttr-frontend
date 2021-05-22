import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
