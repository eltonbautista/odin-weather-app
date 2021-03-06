export const fetchLocation = async function fetchLocation(city) {
  try {
    // Fetch the Geocode for the city I need. A necessary step to convert a city's location to longitude and latitude of said location.

    const responseGeocodingAPI = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=d0fb988627c0d201253cf73bc57e0cef`,
      { mode: 'cors' }
    );
    const dataGeocodingAPI = await responseGeocodingAPI.json();
    return dataGeocodingAPI[0];
  } catch (error) {
    console.log(error);
  }
};
