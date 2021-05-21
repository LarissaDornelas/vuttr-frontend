import React from "react";

import { Container } from "./styles";
import { ILoading } from "./types";

const Loading: React.FC<ILoading> = (props) => {
  return <Container {...props} />;
};

export default Loading;
