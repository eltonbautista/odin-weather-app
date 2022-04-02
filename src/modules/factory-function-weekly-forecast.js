export const weeklyForecastFactoryFunction =
  function weeklyForecastFactoryFunction(
    nameOfDay,
    tempOfDay,
    feelsLikeOfDay,
    conditionOfDay
  ) {
    const [day, temp, feelsLike, condition] = [
      nameOfDay,
      tempOfDay,
      feelsLikeOfDay,
      conditionOfDay,
    ];

    return {
      day,
      temp,
      feelsLike,
      condition,
    };
  };
