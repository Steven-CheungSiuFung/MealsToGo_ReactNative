import styled from "styled-components/native";

export const CompactRestaurantContainer = styled.View`
  padding: ${(props) => props.theme.space[1]};
  border-radius: 5px;
  width: 150px;
  height: 180px;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CompactRestaurantImageIos = styled.Image`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CompactRestaurantImageAndroid = styled.View`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CompactRestaurantTextInfo = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  justify-content: center;
  align-items: center;
`;
