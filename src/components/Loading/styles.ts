import styled, { keyframes } from "styled-components";
import { theme } from "styles/theme";

const spin = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div<{ color?: string; size?: number }>`
  border: 2px solid ${({ color }) => (color ? color : theme.colors.blue)};
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: ${({ size }) => (size ? size : 45)}px;
  height: ${({ size }) => (size ? size : 45)}px;
  animation: ${spin} 2s linear infinite;
`;
