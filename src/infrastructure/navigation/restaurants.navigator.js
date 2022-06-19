import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantDetail = () => {
  return (
    <View>
      <Text>Restaurant Detail</Text>
    </View>
  );
};

const RestaurantStack = createNativeStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};
