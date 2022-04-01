import { fetchLocation } from './fetch-location';
export const fetchWeatherConditions = async function fetchWeatherConditions(
  city
) {
  try {
    const dataOfGeocodingAPI = await fetchLocation(city);
    // commented out for now so I can use 'Calgary' as my test city for the weather API. Will need to use parameters for search form later on.
    //   const dataOfGeocodingAPI = await fetchLocation('Calgary');
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
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitudeOfCity}&lon=${longitudeOfCity}&exclude={part}&appid=d0fb988627c0d201253cf73bc57e0cef`,
      { mode: 'cors' }
    );
    const dataWeatherAPI = await responseWeatherAPI.json();
    console.log(dataWeatherAPI);
  } catch (err) {
    console.log(err);
  }
};
