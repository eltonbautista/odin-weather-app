import { weeklyForecastFactoryFunction } from './factory-function-weekly-forecast';

export const renderDailyForecast = function renderDailyForecast(
  nameOfDay,
  tempOfDay,
  feelsLikeOfDay,
  conditionOfDay
) {
  const weeklyForecastDiv = document.querySelector('.weekly-forecast-div');
  const dailyStatsArray = [];
  const day = document.createElement('div');
  const weatherDayStats = [
    nameOfDay,
    tempOfDay,
    feelsLikeOfDay,
    conditionOfDay,
  ];

  for (let i = 0; i < 4; i += 1) {
    dailyStatsArray[i] = document.createElement('span');
    dailyStatsArray[i].textContent = weatherDayStats[i];
    day.append(dailyStatsArray[i]);
  }

  day.setAttribute('class', `day-div ${nameOfDay}`);
  weeklyForecastDiv.append(day);
};
