import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${theme.colors.lightestBlue};
  padding: 20px;
  border-radius: 5px;
`;

export const ActionWrapper = styled.div<{ flex?: number; justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "flex-end")};
  align-items: center;
  flex: ${({ flex }) => (flex ? flex : 1)};
`;
