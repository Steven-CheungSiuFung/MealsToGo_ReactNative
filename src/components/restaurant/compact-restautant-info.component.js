import React from "react";
import { Platform } from "react-native";

import { Text } from "../typography/text.component";

import {
  CompactRestaurantContainer,
  CompactRestaurantTextInfo,
  CompactRestaurantImageIos,
  CompactRestaurantImageAndroid,
} from "./compact-restaurant-info.styles";

export const CompactRestaurantInfo = ({ restaurant }) => {
  const isAndorid = Platform.OS === "android";
  const Image = isAndorid
    ? CompactRestaurantImageAndroid
    : CompactRestaurantImageIos;
  return (
    <CompactRestaurantContainer>
      <Image source={{ uri: restaurant.photo[0] }} />
      <CompactRestaurantTextInfo>
        <Text variant={"caption"}>{restaurant.name}</Text>
      </CompactRestaurantTextInfo>
    </CompactRestaurantContainer>
  );
};
