import React from "react";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";

import { Text } from "../typography/text.component";

import {
  CompactRestaurantContainer,
  CompactRestaurantTextInfo,
  CompactRestaurantImageIos,
  CompactRestaurantImageAndroid,
} from "./compact-restaurant-info.styles";

export const CompactRestaurantInfo = ({ restaurant }) => {
  const isAndorid = Platform.OS === "android";
  const Image = isAndorid ? (
    <CompactRestaurantImageAndroid>
      <WebView source={{ uri: restaurant.photo[0] }} />
    </CompactRestaurantImageAndroid>
  ) : (
    <CompactRestaurantImageIos source={{ uri: restaurant.photo[0] }} />
  );
  return (
    <CompactRestaurantContainer>
      {Image}
      <CompactRestaurantTextInfo>
        <Text variant={"caption"}>{restaurant.name}</Text>
      </CompactRestaurantTextInfo>
    </CompactRestaurantContainer>
  );
};
