import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SaveArea } from "../../../components/utility/save-area.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [isBreackfastExpended, setIsBreackfastExpended] = useState(false);
  const [isLunchExpended, setIsLunchExpended] = useState(false);
  const [isDinnerExpended, setIsDinnerExpended] = useState(false);
  const [isBarverageExpended, setIsBarverageExpended] = useState(false);

  return (
    <SaveArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={isBreackfastExpended}
            onPress={() => setIsBreackfastExpended(!isBreackfastExpended)}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={isLunchExpended}
            onPress={() => setIsLunchExpended(!isLunchExpended)}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={isDinnerExpended}
            onPress={() => setIsDinnerExpended(!isDinnerExpended)}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Barverage"
            left={(props) => <List.Icon {...props} icon="glass-wine" />}
            expanded={isBarverageExpended}
            onPress={() => setIsBarverageExpended(!isBarverageExpended)}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SaveArea>
  );
};
