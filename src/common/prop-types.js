import PropTypes from 'prop-types';

export const a11yValueShape = PropTypes.string.isRequired;
export const labelContentShape =  PropTypes.string.isRequired;
export const optionValuesShape = PropTypes.arrayOf(PropTypes.shape({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}));
