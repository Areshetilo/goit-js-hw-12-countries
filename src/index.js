import './styles.css';
import fetchCountries from './js/fetchCountries';
import notifyMsg from './js/notifyMsg';
import { refs } from './js/refs';
import countryList from './templates/countryList.hbs';
import countryInfo from './templates/countryInfo.hbs';
const debounce = require('lodash.debounce');


refs.searchQuery.addEventListener('input', debounce(searchInputValue, 500));

function renderMarkup(countries) {
  let markup = null;
  if (countries.length === 1) {
    markup = countryInfo(countries);
    notifyMsg.successMsg();
    return refs.countryInfoRef.insertAdjacentHTML('beforeend', markup);
  } else if (countries.length > 1 || countries.length <= 4) {
    markup = countryList(countries);
    return refs.countryListRef.insertAdjacentHTML('beforeend', markup);
  }
}

function searchInputValue(event) {
  const inputValue = event.target.value;
  refs.countryListRef.innerHTML = '';
  refs.countryInfoRef.innerHTML = '';
  if (inputValue.length > 1) {
    fetchCountries(inputValue)
      .then(data => {
        if (data.length > 0 && data.length <= 4) {
          renderMarkup(data);
        } else if (data.length > 4) {
          notifyMsg.infoMsg()
        }
      })
      .catch(
        notifyMsg.errorMsg());
  }
}

refs.countryListRef.addEventListener('click', event => {
 const searchQuery = event.target.textContent;
  refs.countryInfoRef.innerHTML = '';
  fetchCountries(searchQuery).then(data => renderMarkup(data));
});
