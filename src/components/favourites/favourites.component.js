import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import AntDesign from "@expo/vector-icons/AntDesign";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouritesButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9;
`;

export const Favourites = ({ restaurant }) => {
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext);

  const isFavourited = favourites.find(
    (item) => item.placeId === restaurant.placeId
  );

  const HeartIcon = () => {
    return isFavourited ? (
      <AntDesign name="heart" size={24} color="red" />
    ) : (
      <AntDesign name="hearto" size={24} color="white" />
    );
  };

  const handlePress = () => {
    if (isFavourited) {
      removeFavourite(restaurant);
    } else {
      addFavourite(restaurant);
    }
  };

  return (
    <FavouritesButton onPress={handlePress}>
      <HeartIcon />
    </FavouritesButton>
  );
};
