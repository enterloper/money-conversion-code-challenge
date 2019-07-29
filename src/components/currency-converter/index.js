import React from 'react';
import './styles.scss';
import ColumnWide from '../../layouts/column-wide';
import RowInColumn from '../../layouts/row-in-column-layout';
import {
  getAllExchangeRates,
  getExchangeRatesByCountry,
} from '../../services/exchange-service-api';

getAllExchangeRates()
  .then(data => console.log('DATA:', data));
getExchangeRatesByCountry()
  .then(data => console.log('DataForUS:', data.json()));

function CurrencyConverter() {
  const exampleData = [{ value: 'poop', label: 'poop'},{ value: 'blah', label: 'blah'}];
  return (
    <div className="app">
      <ColumnWide title='Currency Converter'>
        <RowInColumn
          key={1}
          step={1}
          a11yValue="base-currency"
          inputType='select'
          labelContent='Base Currency'
          optionValues={exampleData}
          titleContent="Select the currency you currently have."
        />
        <RowInColumn
          key={2}
          step={2}
          a11yValue="desired-currency"
          inputType='select'
          labelContent='Desired Currency'
          optionValues={exampleData}
          titleContent="Select the currency you want to have."
        />
        <RowInColumn
          key={3}
          step={3}
          a11yValue="base-currency"
          inputType='input'
          labelContent='Amount of Base Currency'
          optionValues={exampleData}
          titleContent="Input the amount of currency you have."
        />
        <div>test</div>
      </ColumnWide>
    </div>
  );
}

export default CurrencyConverter;
