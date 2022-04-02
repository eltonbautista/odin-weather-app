import { weeklyForecastFactoryFunction } from './factory-function-weekly-forecast';

export const createWeeklyForecast = function createWeeklyForecast(
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

export const displayWeeklyForecast = function displayWeeklyForecast(
  myWeatherObject
) {
  const nameOfDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  for (let i = 0; i < 7; i += 1) {
    createWeeklyForecast(
      nameOfDays[i],
      Math.round(myWeatherObject.sevenDayForecast[i].temp.day) + '°C',
      Math.round(myWeatherObject.sevenDayForecast[i].feels_like.day) + '°C',
      myWeatherObject.sevenDayForecast[i].weather[0].description
    );
  }
};
