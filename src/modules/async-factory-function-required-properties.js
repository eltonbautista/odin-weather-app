import { fetchWeatherConditions } from './async-fetch-weather-data';
import { fetchLocation } from './async-fetch-location';
import { timeAndDate } from './async-fetch-time-date';

export const requiredWeatherPropertiesFactoryFunction =
  async function requiredWeatherPropertiesFactoryFunction(city) {
    try {
      // Grab necessary objects via Promises.

      const weatherObject = await fetchWeatherConditions(city);
      const locationObject = await fetchLocation(city);
      const timeAndDateObject = await timeAndDate(city);

      //Return only the necessary properties for my project.

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
