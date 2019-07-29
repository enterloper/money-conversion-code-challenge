import React from 'react';
import {
  a11yValueShape,
  optionValuesShape,
} from '../../common/prop-types';

const Select = ({ a11yTitle, optionValues }) => {
  const mapOptionValues = options => {
    return options.map(option => {
      const { value, label } = option;
      return <option value={value}>{label}</option>
    });
  };

  return (
    <select id={a11yTitle}>
      {mapOptionValues(optionValues)}
    </select>
  );
};

Select.propTypes = {
  a11yValue: a11yValueShape,
  optionValues: optionValuesShape,
};
export default Select;