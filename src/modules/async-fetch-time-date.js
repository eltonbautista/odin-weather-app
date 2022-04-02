import { fetchWeatherConditions } from './async-fetch-weather-data';
export const timeAndDate = async function timeAndDate(location) {
  try {
    const weatherOfCity = await fetchWeatherConditions(location);

    const responseTimeAndDate = await fetch(
      `
      https://cors-anywhere.herokuapp.com/https://www.timeapi.io/api/Time/current/zone?timeZone=${weatherOfCity.timezone}
`,
      { mode: 'cors' }
    );

    const dataTimeAndDate = await responseTimeAndDate.json();

    return dataTimeAndDate;
  } catch (err) {
    console.log(err);
  }
};
