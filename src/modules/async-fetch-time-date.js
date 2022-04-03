import { fetchWeatherConditions } from './async-fetch-weather-data';
export const timeAndDate = async function timeAndDate(location) {
  try {
    const weatherOfCity = await fetchWeatherConditions(location);

    const responseTimeAndDate = await fetch(
      `
      https://timezoneapi.io/api/timezone/?${weatherOfCity.timezone}&token=ahIrLoPNyzpsONTLdmOI
`,
      {
        mode: 'cors',
      }
    );

    const dataTimeAndDate = await responseTimeAndDate.json();

    return dataTimeAndDate;
  } catch (err) {
    console.log(err);
  }
};
