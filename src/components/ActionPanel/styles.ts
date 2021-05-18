import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ActionWrapper = styled.div<{ flex?: number; justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "flex-end")};
  align-items: center;
  flex: ${({ flex }) => (flex ? flex : 1)};
`;
