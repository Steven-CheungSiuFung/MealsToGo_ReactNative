import React from "react";
import { Searchbar } from "react-native-paper";

export const SearchBar = ({ searchQuery, onChangeSearch }) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
