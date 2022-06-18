import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

export const SearchBar = () => {
  const [query, setQuery] = useState("toronto");

  const { onSearch } = useContext(LocationContext);

  const handleSubmit = (event) => {
    const queryWord = event.nativeEvent.text;
    onSearch(queryWord);
  };

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setQuery}
      value={query}
      onSubmitEditing={handleSubmit}
    />
  );
};
