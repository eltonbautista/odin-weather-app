export const createCurrentConditions = function createCurrentConditions(
  currentCondition,
  city,
  currentDate,
  currentTime,
  currentTemp,
  feelsLike,
  humidity,
  windSpeed
) {
  const currentConditionsDiv = document.querySelector(
    '.current-conditions-div'
  );
  const elementArray = [];

  let today = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const getDate = function getDate() {
    let date;
    let month = months[today.getMonth()];
    let day = days[today.getDate()];
    console.log(month);
    return (date =
      day +
      ',' +
      ' ' +
      month +
      ' ' +
      today.getDate() +
      ',' +
      ' ' +
      today.getFullYear());
  };

  const getTime = function getTime() {
    let hour = today.getHours();
    let minutes = today.getMinutes();
    return hour + ':' + minutes;
  };

  const elementTextContent = [
    currentCondition,
    city,
    currentDate,
    currentTime,
    currentTemp,
    feelsLike,
    humidity,
    windSpeed,
  ];

  const elementArrayFunction = function elementArrayFunction() {
    for (let i = 0; i < 8; i++) {
      elementArray[i] = document.createElement('span');
      currentConditionsDiv.append(elementArray[i]);
      elementArray[i].textContent = elementTextContent[i];
    }
  };
  elementArrayFunction();

  const [
    currentConditionsSpan,
    citySpan,
    dateSpan,
    currentTimeSpan,
    currentTempSpan,
    feelsLikeSpan,
    humiditySpan,
    windSpeedSpan,
  ] = elementArray;
};

// A function that I pass onto searchbox-to-weather.js to display the current conditions.

export const displayCurrentConditions = function displayCurrentConditions(
  myWeatherObject
) {
  const currentCondition =
    myWeatherObject.currentForecast.weather[0].description;
  const city = myWeatherObject.nameOfCity;
  const currentDate =
    myWeatherObject.timeAndDateOfCountry.dayOfWeek +
    ', ' +
    myWeatherObject.timeAndDateOfCountry.date;
  const currentTime = myWeatherObject.timeAndDateOfCountry.time;
  const currentTemp = Math.round(myWeatherObject.currentForecast.temp) + '°C';
  const feelsLike =
    'Feels Like: ' +
    Math.round(myWeatherObject.currentForecast.feels_like) +
    '°C';

  const humidity =
    'Humidity: ' + Math.floor(myWeatherObject.currentForecast.humidity) + '%';
  const windSpeed = `Wind Speed: ${myWeatherObject.currentForecast.wind_speed} km/h`;

  // might make current condition and seven day forecast two different objects so I can reuse these names.
  createCurrentConditions(
    currentCondition,
    city,
    currentDate,
    currentTime,
    currentTemp,
    feelsLike,
    humidity,
    windSpeed
  );
};
