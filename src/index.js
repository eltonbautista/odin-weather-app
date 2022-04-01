import './style.css';
// import { fetchLocation } from './modules/fetch-location';
// fetchLocation('London');
import { fetchWeatherConditions } from './modules/async-fetch-weather-data';
import { requiredWeatherPropertiesFactoryFunction } from './modules/factory-function-required-properties';
// fetchWeatherConditions('Calgary');

async function foo() {
  const calgary = await requiredWeatherPropertiesFactoryFunction('Calgary');
  console.log(calgary);
}
foo();
