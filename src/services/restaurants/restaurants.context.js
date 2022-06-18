import React, { createContext, useState, useEffect, useContext } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../location/location.context";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const { coordinate } = useContext(LocationContext);

  const retriveRestaurant = (coordinate) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(coordinate)
        .then(restaurantsTransform)
        .then((result) => {
          setRestaurants(result);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(err);
          console.log("Retriving Restaurant Error ==> ", err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (coordinate) {
      retriveRestaurant(coordinate);
    }
  }, [coordinate]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading }}>
      {children}
    </RestaurantContext.Provider>
  );
};
