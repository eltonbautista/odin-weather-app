import { displayCurrentConditions } from './dynamic-ui-current-conditions';
import { displayWeeklyForecast } from './dynamic-ui-weekly-forecast';

export const onLoadDisplay = function onLoadDisplay() {
  const currentCity = JSON.parse(localStorage.getItem('city'));

  displayCurrentConditions(currentCity);
  displayWeeklyForecast(currentCity);
};
