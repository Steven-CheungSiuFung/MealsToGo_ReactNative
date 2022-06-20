import React, { useContext } from "react";
import { FlatList, Pressable, TouchableOpacity } from "react-native";
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

export const RestaurantScreen = ({ navigation }) => {
  /*
  <The Data Flow>
    1. user type in a keyword in SearchBar ==> (keyword) -- onSubmit --> LocationContext --> location.service
    2. get coordinate by api request from location service ==> (keyword) -- API request -- response: (coordinate) --> LocationContext
    3. passing coordinate to restaurant.service: LocationContext ==> (coordinate) --> RestaurantContext --> restaurant.service
    4. get restaurants by api request from restaurant.service ==> (coordinate) -- API request -- response: (restaurants) --> RestaurantContext
    5. trigger re-rendering of restaurants list;
  
  */
  const { restaurants, isLoading, isError } = useContext(RestaurantContext);

  return (
    <SaveArea>
      <SearchBarView>
        <SearchBar />
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
      )}
    </SaveArea>
  );
};
