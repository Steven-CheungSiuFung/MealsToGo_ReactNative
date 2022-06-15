import React from "react";
import styled, { useTheme } from "styled-components/native";

const positions = {
  top: "margin-top",
  bottom: "margin-bottom",
  left: "margin-left",
  right: "margin-right",
};

const sizesIndex = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 5,
};

const getVariant = (position, size, theme) => {
  const property = positions[position];
  const sizeIndex = sizesIndex[size];
  const sizeValue = theme.space[sizeIndex];

  return `${property}: ${sizeValue};`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
