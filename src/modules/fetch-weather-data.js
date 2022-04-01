import { fetchLocation } from './fetch-location';
export const fetchWeatherConditions = async function fetchWeatherConditions(
  city
) {
  const dataOfGeocodingAPI = await fetchLocation(city);
  // commented out for now so I can use 'Calgary' as my test city for the weather API. Will need to use parameters for search form later on.
  //   const dataOfGeocodingAPI = await fetchLocation('Calgary');
  const longitudeOfCity = dataOfGeocodingAPI.lon;
  const latitudeOfCity = dataOfGeocodingAPI.lat;
  const nameOfCity = dataOfGeocodingAPI.name;
  const stateOfCity = dataOfGeocodingAPI.state;
  console.log(longitudeOfCity);

  const responseWeatherAPI = await fetch(
    `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitudeOfCity}&lon=${longitudeOfCity}&cnt=7&appid=d0fb988627c0d201253cf73bc57e0cef`,
    { mode: 'cors' }
  );
  const dataWeatherAPI = await responseWeatherAPI.json();
  console.log(dataWeatherAPI);
};
// POTENTIAL PROMISE VERSION:
//d0fb988627c0d201253cf73bc57e0cef
//   fetch(
//     `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitudeOfCity}&lon=${longitudeOfCity}&cnt=7&appid=d0fb988627c0d201253cf73bc57e0cef`,
//     { mode: 'cors' }
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((response) => {
//       console.log(response);
//     });
