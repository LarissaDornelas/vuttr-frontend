import { createElement } from "react";
import styled from "styled-components";
const element = createElement;

export const StyledTypography = styled(({ tag = "span", children, ...props }) =>
  element(tag, props, children)
)``;
