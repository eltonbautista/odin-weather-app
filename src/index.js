import './style.css';
import { searchboxToWeather } from './modules/searchbox-to-weather';
import { onLoadDisplay } from './modules/local-storage';

const currentConditionsDiv = document.querySelector('.current-conditions-div');
const weeklyForecastDiv = document.querySelector('.weekly-forecast-div');

searchboxToWeather(currentConditionsDiv, weeklyForecastDiv);

const localWeatherData = JSON.parse(localStorage.getItem('city'));

const loadLS = (function loadLocalWeatherData() {
  try {
    if (localWeatherData !== 'null' || localWeatherData !== 'undefined') {
      window.onload = onLoadDisplay();
    } else {
      return;
    }
  } catch (err) {
    return;
  }
})();
