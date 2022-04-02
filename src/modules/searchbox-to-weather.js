import { requiredWeatherPropertiesFactoryFunction } from './async-factory-function-required-properties';
import { createCurrentConditions } from './dynamic-ui-current-conditions';
import { displayCurrentConditions } from './dynamic-ui-current-conditions';

export const searchboxToWeather = function searchboxToWeather() {
  // create appropriate divs
  const mainContent = document.querySelector('#main-content');
  const searchboxDiv = document.querySelector('.searchbox-div');
  const form = document.createElement('form');
  const searchbox = document.createElement('input');
  const submitButton = document.createElement('input');

  searchbox.setAttribute('type', 'searchbox');
  submitButton.setAttribute('type', 'submit');

  submitButton.textContent = 'submit';

  searchboxDiv.append(form);
  form.append(searchbox);
  form.append(submitButton);

  // add an event listener onto the form, the function passed needs to be asynchronous to get the correct value.

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchboxValue = searchbox.value;
    const myWeatherObject = await requiredWeatherPropertiesFactoryFunction(
      searchboxValue
    );
    console.log(myWeatherObject);

    displayCurrentConditions(myWeatherObject);
  });

  // to have myWeatherObject properties properly display onto the page UI, why don't I just pass down each of those properties through
  // a function's parameters? i.e. myWeatherUI(myWeatherObject.name, myWeatherObject.country, etc.)
  // myWeatherUI has a bunch of code inside, on the right hand side of assignment we will use these arguments. We can import myWeatherUI from another module onto here.
  // on the press of "Submit" button, that's when it will create the UI, by invoking the myWeatherUI() function, which contains a bunch of .createElement()
};
