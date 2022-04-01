export const renderCurrentConditions = function renderCurrentConditions(
  currentCondition,
  city,
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
    getDate(),
    getTime(),
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

  // currentConditionsSpan.textContent = currentCondition;
  // citySpan.textContent = city;
  // dateSpan.textContent = getDate();
  // currentTimeSpan.textContent = getTime();
  // currentTempSpan.textContent = currentTemp;
  // feelsLikeSpan.textContent = feelsLike;
  // humiditySpan.textContent = humidity;
  // windSpeedSpan.textContent = windSpeed;
};
