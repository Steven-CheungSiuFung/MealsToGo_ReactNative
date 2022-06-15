import React, { Fragment } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";

import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

// import {
//   useFonts as useUbuntu,
//   Ubuntu_400Regular,
//   Ubuntu_700Bold,
// } from "@expo-google-fonts/ubuntu";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  // const [ubuntuLoaded] = useUbuntu({
  //   Ubuntu_400Regular,
  //   Ubuntu_700Bold,
  // });

  const [latodLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latodLoaded) {
    return null;
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </Fragment>
  );
}
