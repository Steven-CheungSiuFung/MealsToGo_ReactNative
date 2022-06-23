import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

export const SearchBarMap = () => {
  const [query, setQuery] = useState("toronto");

  const { onSearch, keyword } = useContext(LocationContext);

  const handleSubmit = (event) => {
    const queryWord = event.nativeEvent.text;
    onSearch(queryWord);
  };

  useEffect(() => {
    setQuery(keyword);
  }, [keyword]);

  return (
    <Searchbar
      placeholder="Search"
      icon="map-marker-radius-outline"
      onChangeText={setQuery}
      value={query}
      onSubmitEditing={handleSubmit}
    />
  );
};
