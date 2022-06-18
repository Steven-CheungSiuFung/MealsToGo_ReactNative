import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("mot found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResult = camelize(result);
  const { geometry } = formattedResult.results[0];
  const { lat, lng } = geometry.location;
  const coordinate = `${lat},${lng}`;

  return coordinate;
};
