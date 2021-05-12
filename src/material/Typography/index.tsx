import React from "react";

import { ITypography } from "./types";
import { StyledTypography } from "./styles";

const Typography: React.FC<ITypography> = (props) => {
  const { children } = props;
  return <StyledTypography {...props}>{children}</StyledTypography>;
};

export default Typography;
