import { exchangeRatesURL } from '../common/constants';

export const getAllExchangeRates = () => {
  return fetch(exchangeRatesURL)
    .then(response => response.text())
    .then(data => console.log(data)); //.then(data => data.json());
};

export const getExchangeRatesByCountry = (base = 'USD') => {
  const exchangeRatesURLByCountry = `${exchangeRatesURL}?base=${base}`;
  return fetch(exchangeRatesURLByCountry).then(data => data.json());
};
