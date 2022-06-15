import React from "react";
import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

import { SearchBar } from "../../../components/search-bar.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const SearchBarView = styled.View`
  padding: ${(props) => props.theme.space[2]};
  justify-content: center;
  align-items: center;
`;

const RestaurantsList = styled.View`
  flex: 1;
  flex-grow: 1;
  padding: ${(props) => props.theme.space[2]};
  background-color: green;
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <ScreenContainer>
      <SearchBarView>
        <SearchBar searchQuery={searchQuery} onChangeSearch={onChangeSearch} />
      </SearchBarView>
      <RestaurantsList>
        <RestaurantInfoCard />
      </RestaurantsList>
    </ScreenContainer>
  );
};
