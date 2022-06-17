import React, { Fragment } from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SaveArea } from "./src/components/utility/save-area.component";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";

import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

function MapScreen() {
  return (
    <SaveArea>
      <Text>Map Screen!</Text>
    </SaveArea>
  );
}

function SettingsScreen() {
  return (
    <SaveArea>
      <Text>Settings!</Text>
    </SaveArea>
  );
}

const Tab = createBottomTabNavigator();

const TAB_NAME_FOCUSED = {
  Restaurants: "restaurant",
  Map: "md-location-sharp",
  Settings: "settings-sharp",
};

const TAB_NAME_OUTLINE = {
  Restaurants: "restaurant-outline",
  Map: "md-location-outline",
  Settings: "settings-outline",
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = focused
      ? TAB_NAME_FOCUSED[route.name]
      : TAB_NAME_OUTLINE[route.name];

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
});

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latodLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latodLoaded) {
    return null;
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <RestaurantContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen
                options={{ headerShown: false }}
                name="Restaurants"
                component={RestaurantScreen}
              />
              <Tab.Screen
                options={{ headerShown: false }}
                name="Map"
                component={MapScreen}
              />
              <Tab.Screen
                options={{ headerShown: false }}
                name="Settings"
                component={SettingsScreen}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantContextProvider>
      </ThemeProvider>
    </Fragment>
  );
}
