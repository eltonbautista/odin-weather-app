import { fetchWeatherConditions } from './async-fetch-weather-data';
import { fetchLocation } from './async-fetch-location';
import { timeAndDate } from './async-fetch-time-date';

export const requiredWeatherPropertiesFactoryFunction =
  async function requiredWeatherPropertiesFactoryFunction(city) {
    try {
      const weatherObject = await fetchWeatherConditions(city);
      const locationObject = await fetchLocation(city);
      const timeAndDateObject = await timeAndDate(city);

      const sevenDayForecast = weatherObject.daily;
      const currentForecast = weatherObject.current;
      const nameOfCity = locationObject.name;
      const nameOfState = locationObject.state;
      const nameOfCountry = locationObject.country;
      const timeAndDateOfCountry = timeAndDateObject;

      return {
        sevenDayForecast,
        currentForecast,
        nameOfCity,
        nameOfState,
        nameOfCountry,
        timeAndDateOfCountry,
      };
    } catch (err) {
      console.log('err');
    }
  };
