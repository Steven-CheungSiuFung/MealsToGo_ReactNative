import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

export const SearchBar = ({
  isFavouritesBarToggle,
  setIsFavouritesBarToggle,
}) => {
  const [query, setQuery] = useState("toronto");

  const { onSearch, keyword } = useContext(LocationContext);

  const handleSubmit = (event) => {
    const queryWord = event.nativeEvent.text;
    onSearch(queryWord);
  };

  const handleFavouritesBarToggle = () => {
    setIsFavouritesBarToggle(!isFavouritesBarToggle);
  };

  useEffect(() => {
    setQuery(keyword);
  }, [keyword]);

  return (
    <Searchbar
      icon={isFavouritesBarToggle ? "heart" : "heart-outline"}
      onIconPress={handleFavouritesBarToggle}
      placeholder="Search"
      onChangeText={setQuery}
      value={query}
      onSubmitEditing={handleSubmit}
    />
  );
};
