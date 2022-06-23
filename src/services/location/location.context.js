import React, { createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("toronto");
  const [coordinate, setCoordiante] = useState(null);
  const [viewport, setViewport] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword.toLowerCase());
  };

  useEffect(() => {
    locationRequest(keyword)
      .then(locationTransform)
      .then((result) => {
        setCoordiante(result.location);
        setViewport(result.viewport);
        setIsLoading(false);
        console.log("location context return ==>", result.location);
      })
      .catch((err) => {
        setIsError(err);
        console.log("Error: ", err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ keyword, isLoading, isError, onSearch, coordinate, viewport }}
    >
      {children}
    </LocationContext.Provider>
  );
};
