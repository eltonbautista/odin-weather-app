import { fetchWeatherConditions } from './async-fetch-weather-data';
import { fetchLocation } from './async-fetch-location';
export const requiredWeatherPropertiesFactoryFunction =
  async function requiredWeatherPropertiesFactoryFunction(city) {
    const weatherObject = await fetchWeatherConditions(city);
    const locationObject = await fetchLocation(city);

    const sevenDayForecast = weatherObject.daily;
    const currentForecast = weatherObject.current;
    const nameOfCity = locationObject.name;
    const nameOfState = locationObject.state;
    const nameOfCountry = locationObject.country;

    return {
      sevenDayForecast,
      currentForecast,
      nameOfCity,
      nameOfState,
      nameOfCountry,
    };
  };
