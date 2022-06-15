import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons";

import { Spacer } from "../../../components/spacer/spacer.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.text.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

const RatingStarContainer = styled.View`
  flex-direction: row;
`;

const SvgContainer = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StateInfoContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const OpeningHours = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

const ClosedText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.error};
`;

const ratingStar = (rating) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return ratingArray.map((item, index) => (
    <SvgXml key={index} xml={star} width={20} height={20} />
  ));
};

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Random Cafe",
    icon = "cafe",
    photo = [
      "https://images.pexels.com/photos/3326113/pexels-photo-3326113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "57 some ramdom street",
    openingHours = "10am - 21pm",
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photo[0] }} />
      <Info>
        <Title>{name}</Title>
        <SvgContainer>
          <RatingStarContainer>{ratingStar(rating)}</RatingStarContainer>
          <StateInfoContainer>
            {!isClosedTemporarily ? (
              <SvgXml xml={open} width={20} height={20} />
            ) : (
              <ClosedText>Closed</ClosedText>
            )}
            <Spacer variant="left.medium" />
            <OpeningHours>{openingHours}</OpeningHours>
            <Spacer variant="left.medium" />
            <Icon name={icon} size={20} />
          </StateInfoContainer>
        </SvgContainer>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
