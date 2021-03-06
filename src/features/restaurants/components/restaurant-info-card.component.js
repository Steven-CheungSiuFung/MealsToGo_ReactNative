import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourites } from "../../../components/favourites/favourites.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  RatingStarContainer,
  SvgContainer,
  StateInfoContainer,
  TypesIcon,
} from "./restaurant-info-card.styles";

const ratingStar = (placeId, rating) => {
  const ratingArray = Array.from(new Array(rating));
  return ratingArray.map((item, index) => (
    <SvgXml
      key={`${placeId}-star-${index}`}
      xml={star}
      width={20}
      height={20}
    />
  ));
};

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Random Cafe",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    photo = [
      "https://images.pexels.com/photos/3326113/pexels-photo-3326113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "57 some ramdom street",
    openingHours = true,
    rating = 1,
    isClosedTemporarily = false,
    placeId = "id",
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <Favourites restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photo[0] }} />
      <Info>
        <Text variant={"secondaryTitle"}>{name}</Text>
        <SvgContainer>
          <RatingStarContainer>
            {ratingStar(placeId, rating)}
          </RatingStarContainer>
          <StateInfoContainer>
            {!isClosedTemporarily ? (
              <SvgXml xml={open} width={20} height={20} />
            ) : (
              <Text variant={"error"}>Closed</Text>
            )}
            {openingHours && (
              <Spacer position={"left"} size={"md"}>
                <Text variant={"body"}>Opening</Text>
              </Spacer>
            )}
            <Spacer position={"left"} size={"md"}>
              <TypesIcon source={{ uri: icon }} />
            </Spacer>
          </StateInfoContainer>
        </SvgContainer>
        <Text variant={"body"}>{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
