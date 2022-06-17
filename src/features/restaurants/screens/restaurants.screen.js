import React, { useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

import { SaveArea } from "../../../components/utility/save-area.component";
import { SearchBar } from "../components/search-bar.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

import { Spacer } from "../../../components/spacer/spacer.component";

const SearchBarView = styled.View`
  padding: ${(props) => props.theme.space[2]};
  justify-content: center;
  align-items: center;
`;

const RestaurantsListContainer = styled.View`
  flex: 1;
  flex-grow: 1;
  padding: ${(props) => props.theme.space[2]};
  background-color: white;
`;

const LoadingView = styled.View`
  flex: 1;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const RestaurantScreen = () => {
  const { restaurants, isLoading, isError } = useContext(RestaurantContext);

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SaveArea>
      <SearchBarView>
        <SearchBar searchQuery={searchQuery} onChangeSearch={onChangeSearch} />
      </SearchBarView>
      {isLoading ? (
        <LoadingView>
          <ActivityIndicator animating={true} size={50} color={"gray"} />
        </LoadingView>
      ) : (
        <RestaurantsListContainer>
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <Spacer position={"bottom"} size={"lg"}>
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              );
            }}
            keyExtractor={(item, index) => index}
          />
        </RestaurantsListContainer>
      )}
    </SaveArea>
  );
};
