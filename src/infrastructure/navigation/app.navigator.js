import React, { Fragment } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsNavigator } from "./settings-navigator";

import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

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
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsNavigator} />
            </Tab.Navigator>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </Fragment>
  );
};
