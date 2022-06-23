import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (coordinate) => {
  const coordinateString = `${coordinate.lat},${coordinate.lng}`;
  console.log("request for restaurants's coordinate ==> ", coordinateString);
  return new Promise((resolve, reject) => {
    const mock = mocks[coordinateString];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    restaurant.photo = [
      mockImages[Math.floor(Math.random() * mockImages.length)],
    ];
    return {
      ...restaurant,
      address: restaurant.vicinity,
      rating: Math.floor(restaurant.rating),
      openingHours:
        restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResult);
};
