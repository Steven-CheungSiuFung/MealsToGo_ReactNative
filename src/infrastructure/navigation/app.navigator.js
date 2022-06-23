import React, { Fragment } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { SaveArea } from "../../components/utility/save-area.component";
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

function SettingsScreen() {
  return (
    <SaveArea>
      <Text>Settings!</Text>
    </SaveArea>
  );
}

const Tab = createBottomTabNavigator();

const TAB_NAME_FOCUSED = {
  Restaurant: "restaurant",
  Map: "md-location-sharp",
  Settings: "settings-sharp",
};

const TAB_NAME_OUTLINE = {
  Restaurant: "restaurant-outline",
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
  headerShown: false,
});

export const AppNavigator = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Fragment>
  );
};
