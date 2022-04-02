import './style.css';
// import { fetchLocation } from './modules/fetch-location';
// fetchLocation('London');
import { fetchWeatherConditions } from './modules/async-fetch-weather-data';
import { requiredWeatherPropertiesFactoryFunction } from './modules/async-factory-function-required-properties';
import { searchboxToWeather } from './modules/searchbox-to-weather';
import { renderCurrentConditions } from './modules/dynamic-ui-current-conditions';
import { renderWeeklyForecast } from './modules/dynamic-ui-weekly-forecast';

const currentConditionsDiv = document.querySelector('.current-conditions-div');
const weeklyForecastDiv = document.querySelector('.weekly-forecast-div');

searchboxToWeather(currentConditionsDiv, weeklyForecastDiv);
