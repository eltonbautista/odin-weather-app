import './style.css';
// import { fetchLocation } from './modules/fetch-location';
// fetchLocation('London');
import { fetchWeatherConditions } from './modules/async-fetch-weather-data';
import { requiredWeatherPropertiesFactoryFunction } from './modules/async-factory-function-required-properties';
import { searchboxToWeather } from './modules/searchbox-to-weather';
import { renderCurrentConditions } from './modules/dynamic-ui-current-conditions';
import { renderWeeklyForecast } from './modules/dynamic-ui-weekly-forecast';
// // fetchWeatherConditions('Calgary');

// async function foo() {
//   const calgary = await requiredWeatherPropertiesFactoryFunction('Calgary');
//   console.log(calgary);
// }
// foo();

searchboxToWeather();
