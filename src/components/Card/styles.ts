import styled from "styled-components";
import { theme } from "styles/theme";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 10px 10px #0000000d;
  border-radius: 5px;
  margin: 20px 0;
  position: relative;
  box-sizing: border-box;
`;

export const Link = styled.a`
  font-size: 21px;
  color: ${theme.colors.blue};
`;

export const RemoveButton = styled.button`
  position: absolute;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;

  &:hover{
    opacity: 0.5;
  }
`;

export const Icon = styled.img`
  max-height: 12px;
`;

export const Description = styled.p``;

export const Tags = styled.p`
  font-weight: 600;
`;
