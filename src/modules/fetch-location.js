export const fetchLocation = async function fetchLocation(city) {
  try {
    const responseGeocodingAPI = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=d0fb988627c0d201253cf73bc57e0cef`,
      { mode: 'cors' }
    );
    const dataGeocodingAPI = await responseGeocodingAPI.json();
    console.log(dataGeocodingAPI[0]);
    return dataGeocodingAPI[0];
  } catch (error) {
    console.log(error);
  }
};
