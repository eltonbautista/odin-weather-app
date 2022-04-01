import { fetchLocation } from './fetch-location';
export const fetchWeatherConditions = async function fetchWeatherConditions(
  city
) {
  //   const dataOfGeocodingAPI = await fetchLocation(city);
  const dataOfGeocodingAPI = await fetchLocation('Calgary');
  const longitudeOfCity = dataOfGeocodingAPI.lon;
  const latitudeOfCity = dataOfGeocodingAPI.lat;
  const nameOfCity = dataOfGeocodingAPI.name;
  const stateOfCity = dataOfGeocodingAPI.state;

  const responseWeatherAPI = await fetch(``);
};
