import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-weight: 500;
  letter-spacing: 0.84px;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  line-height: 0.4;
`;
export const Subtitle = styled.h2`
  font-weight: 500;
  letter-spacing: 0.72px;
  margin-bottom: 40px;
  color: ${theme.colors.primary};
`;

export const LoadingWrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  color: ${theme.colors.secondary};
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-top: 100px;
`;
