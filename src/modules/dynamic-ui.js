export const renderCurrentConditions = function renderCurrentConditions(
  currentCondition
) {
  const currentConditionsDiv = document.querySelector(
    '.current-conditions-div'
  );
  const elementArray = [];

  const elementArrayFunction = function elementArrayFunction() {
    for (let i = 0; i < 7; i++) {
      elementArray[i] = document.createElement('span');
      currentConditionsDiv.append(elementArray[i]);
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
    chanceOfRainSpan,
  ] = elementArray;

  currentConditionsSpan.textContent = currentCondition;
};
