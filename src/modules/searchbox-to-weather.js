import { requiredWeatherPropertiesFactoryFunction } from './async-factory-function-required-properties';
import { displayCurrentConditions } from './dynamic-ui-current-conditions';
import { displayWeeklyForecast } from './dynamic-ui-weekly-forecast';

export const searchboxToWeather = function searchboxToWeather(
  currentConditionsDiv,
  weeklyForecastDiv
) {
  // create appropriate divs
  const mainContent = document.querySelector('#main-content');
  const searchboxDiv = document.querySelector('.searchbox-div');
  const form = document.createElement('form');
  const searchbox = document.createElement('input');
  const submitButton = document.createElement('input');

  searchbox.setAttribute('type', 'search');
  submitButton.setAttribute('type', 'submit');

  submitButton.textContent = 'submit';
  searchbox.setAttribute('placeholder', 'Search for a city..');
  searchbox.setAttribute('required', true);
  searchbox.setAttribute(
    'oninvalid',
    "this.setCustomValidity('Please enter a valid city')"
  );
  searchbox.setAttribute('oninput', "this.setCustomValidity('')");
  searchbox.setAttribute('pattern', '^[A-Za-z ]+$');

  searchboxDiv.append(form);
  form.append(searchbox);
  form.append(submitButton);

  // add an event listener onto the form, the function passed needs to be asynchronous to get the correct value.
  // Where the bulk of rendering items on the browser happens.
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchboxValue = searchbox.value;
    const myWeatherObject = await requiredWeatherPropertiesFactoryFunction(
      searchboxValue
    );

    currentConditionsDiv.textContent = '';
    weeklyForecastDiv.textContent = '';

    displayCurrentConditions(myWeatherObject);
    displayWeeklyForecast(myWeatherObject);
    // Set local storage when user submits city. This will be used to load up the same city when they reload page.
    localStorage.setItem('city', JSON.stringify(myWeatherObject));
  });

  // to have myWeatherObject properties properly display onto the page UI, why don't I just pass down each of those properties through
  // a function's parameters? i.e. myWeatherUI(myWeatherObject.name, myWeatherObject.country, etc.)
  // myWeatherUI has a bunch of code inside, on the right hand side of assignment we will use these arguments. We can import myWeatherUI from another module onto here.
  // on the press of "Submit" button, that's when it will create the UI, by invoking the myWeatherUI() function, which contains a bunch of .createElement()
};
