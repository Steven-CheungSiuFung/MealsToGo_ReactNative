import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../restaurant/compact-restautant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouritesScroll = styled(ScrollView)`
  height: 180px;
`;

export const FavouritesBar = ({ favourites, navigateToDetail }) => {
  if (favourites.length === 0) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position={"bottom"} size={"md"}>
        <Text variant={"caption"}>Favourite restaurants</Text>
      </Spacer>

      <FavouritesScroll horizontal={true}>
        {favourites.map((restaurant) => (
          <Spacer key={restaurant.placeId} position={"right"} size={"md"}>
            <TouchableOpacity
              onPress={() =>
                navigateToDetail("RestaurantDetail", {
                  restaurant: restaurant,
                })
              }
            >
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </FavouritesScroll>
    </FavouritesWrapper>
  );
};
