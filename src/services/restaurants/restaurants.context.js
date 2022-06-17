import React, { createContext, useState, useEffect } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((result) => {
          setRestaurants(result);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(err);
          console.log("Error", err);
        });
    }, 2000);
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading }}>
      {children}
    </RestaurantContext.Provider>
  );
};
