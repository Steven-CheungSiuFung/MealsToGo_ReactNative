import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { SaveArea } from "../../../components/utility/save-area.component";
import { SearchBar } from "../components/search-bar.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

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

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SaveArea>
      <SearchBarView>
        <SearchBar searchQuery={searchQuery} onChangeSearch={onChangeSearch} />
      </SearchBarView>
      <RestaurantsListContainer>
        <FlatList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
          ]}
          renderItem={() => (
            <Spacer position={"bottom"} size={"lg"}>
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
          // contentContainerStyle={{ padding: 16 }}
        />
      </RestaurantsListContainer>
    </SaveArea>
  );
};
