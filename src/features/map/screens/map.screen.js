import React, { Fragment, useEffect, useContext, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";

import { SearchBarMap } from "../components/search-map.component";
import { MapCallout } from "../components/map-callout.component";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const SearchBarMapView = styled.View`
  padding: ${(props) => props.theme.space[2]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const [regionData, setRegionData] = useState(null);
  const { coordinate, viewport } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);

  const updateViewport = () => {
    const { lat, lng } = coordinate;
    const { northeast, southwest } = viewport;
    const latitudeDelta = northeast.lat - southwest.lat;
    const longitudeDelta = northeast.lng - southwest.lng;

    const data = {
      latitude: lat,
      longitude: lng,
      latitudeDelta: latitudeDelta,
      longitudeDelta: 0.02,
    };

    setRegionData(data);
  };

  useEffect(() => {
    updateViewport();
  }, [coordinate, viewport]);

  return (
    <Fragment>
      <SearchBarMapView>
        <SearchBarMap />
      </SearchBarMapView>
      <Map region={regionData}>
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
          >
            <Callout
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: restaurant,
                })
              }
            >
              <MapCallout restaurant={restaurant} />
            </Callout>
          </Marker>
        ))}
      </Map>
    </Fragment>
  );
};
