import React from "react";
import styled from "styled-components/native";

import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restautant-info.component";

const MapCalloutCardContainer = styled.View``;

export const MapCallout = ({ restaurant }) => {
  return (
    <MapCalloutCardContainer>
      <CompactRestaurantInfo restaurant={restaurant} />
    </MapCalloutCardContainer>
  );
};
