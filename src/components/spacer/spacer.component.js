import React from "react";
import styled from "styled-components/native";

const LeftSmall = styled.View`
  margin-left: ${(props) => props.theme.space[1]};
`;

const LeftMedium = styled.View`
  margin-left: ${(props) => props.theme.space[2]};
`;

export const Spacer = ({ variant }) => {
  if (variant === "left.small") {
    return <LeftSmall />;
  }
  if (variant === "left.medium") {
    return <LeftMedium />;
  }
  return <LeftSmall />;
};
