import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

export const SaveArea = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
