import styled from "styled-components/native";
import { WebView } from "react-native-webview";

export const CompactRestaurantContainer = styled.View`
  width: 150px;
  height: auto;
`;

export const CompactRestaurantImageIos = styled.Image`
  width: 100%;
  height: 120px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CompactRestaurantImageAndroid = styled(WebView)`
  width: 150px;
  height: 120px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CompactRestaurantTextInfo = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justify-content: center;
  align-items: center;
`;
