import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantsListContainer } from "../../restaurants/screens/restaurants.screen";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

const NoFavouritesContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <RestaurantsListContainer>
      <FlatList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position={"bottom"} size={"lg"}>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => item.placeId}
      />
    </RestaurantsListContainer>
  ) : (
    <NoFavouritesContainer>
      <Text>No Favourites Yet</Text>
    </NoFavouritesContainer>
  );
};
