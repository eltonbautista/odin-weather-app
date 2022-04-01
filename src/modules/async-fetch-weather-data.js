import { fetchLocation } from './async-fetch-location';
export const fetchWeatherConditions = async function fetchWeatherConditions(
  city
) {
  try {
    // Use returned object of fetchLocation(city) to setup the responseWeatherAPI fetch because lon and lat are needed parameters.
    const dataOfGeocodingAPI = await fetchLocation(city);

    const longitudeOfCity = dataOfGeocodingAPI.lon;
    const latitudeOfCity = dataOfGeocodingAPI.lat;
    const nameOfCity = dataOfGeocodingAPI.name;
    const stateOfCity = dataOfGeocodingAPI.state;

    // POTENTIAL PROMISE VERSION:
    //d0fb988627c0d201253cf73bc57e0cef
    //   fetch(
    //     `https://api.openweathermap.org/data/2.5/onecall?lat=${latitudeOfCity}&lon=${longitudeOfCity}&exclude={part}&appid=d0fb988627c0d201253cf73bc57e0cef`,
    //     { mode: 'cors' }
    //   );
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((response) => {
    //       console.log(response);
    //     });

    const responseWeatherAPI = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitudeOfCity}&lon=${longitudeOfCity}&exclude={part}&units=metric&appid=d0fb988627c0d201253cf73bc57e0cef`,
      { mode: 'cors' }
    );
    const dataWeatherAPI = await responseWeatherAPI.json();
    // console.log(dataWeatherAPI);
    return dataWeatherAPI;
  } catch (err) {
    console.log(err);
  }
};
