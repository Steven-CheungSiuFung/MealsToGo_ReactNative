import React from "react";
import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AccountBackground,
  AccountButton,
  AccountCover,
  AccountContainer,
  AnimateContainer,
  TitleText,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimateContainer>
        <LottieView
          autoPlay
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimateContainer>
      <Spacer position={"top"} size={"xxl"}></Spacer>
      <AccountContainer>
        <TitleText>Meals To Go</TitleText>

        <AccountButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AccountButton>
        <Spacer position={"top"} size={"lg"}>
          <AccountButton
            icon="calendar-edit"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AccountButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
