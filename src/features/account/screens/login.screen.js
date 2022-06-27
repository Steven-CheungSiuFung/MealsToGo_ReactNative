import React, { useState, useContext } from "react";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AccountTextInput,
  AccountButton,
  ErrorContainer,
  LoadingIndicator,
  TitleText,
} from "../components/account.styles";

export const LoginScreen = () => {
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handlePress = () => {
    onLogin(emailInput, passwordInput);
  };

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <TitleText>Meals To Go</TitleText>
        <AccountTextInput
          label="Email"
          value={emailInput}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmailInput(text)}
        />
        <Spacer position={"top"} size={"lg"}>
          <AccountTextInput
            label="Password"
            value={passwordInput}
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(text) => setPasswordInput(text)}
          />
        </Spacer>
        {error && (
          <Spacer position={"top"} size={"lg"}>
            <ErrorContainer>
              <Text variant={"error"}>Error: {error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
        <Spacer position={"top"} size={"lg"}>
          {!isLoading ? (
            <AccountButton mode="contained" onPress={handlePress}>
              Login
            </AccountButton>
          ) : (
            <LoadingIndicator animating={true} />
          )}
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
