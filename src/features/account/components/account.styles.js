import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { Button, TextInput, ActivityIndicator } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/main.jpeg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const AccountContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  background-color: rgba(255, 255, 255, 0.65);
  align-items: center;
`;

export const AccountButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 260px;
`;

export const AccountTextInput = styled(TextInput)`
  width: 260px;
  height: 56px;
`;

export const ErrorContainer = styled.View`
  max-width: 260px;
  justify-content: center;
  align-items: center;
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[3]};
`;

export const AnimateContainer = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[1]};
`;

export const TitleText = styled(Text).attrs({
  variant: "title",
})`
  padding-bottom: ${(props) => props.theme.space[1]};
  margin-bottom: ${(props) => props.theme.space[4]};
`;
