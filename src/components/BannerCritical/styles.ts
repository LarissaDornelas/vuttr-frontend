import styled, { keyframes } from "styled-components";
import { theme } from "styles/theme";
import { BannerCriticalType } from "./types";

const apearing = keyframes`
    from{
        height: 0px;
    }
    to{
        height:50px;
    }
`;

export const Container = styled.div<{ type: BannerCriticalType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: ${({ type }) =>
    type === BannerCriticalType.SUCCESS
      ? theme.colors.success
      : theme.colors.error};
  position: fixed;
  bottom: 0;
  left: 0;
  animation: 1000ms ${apearing} ease-in-out;
`;

export const Message = styled.span`
  color: ${theme.colors.white};
`;

export const Icon = styled.img`
  max-height: 16px;
  margin-right: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  z-index: 1;

  &:hover {
    opacity: 0.5;
  }
`;

export const CloseIcon = styled.img`
  max-height: 12px;
`;
