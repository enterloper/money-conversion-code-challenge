import React from 'react';
import Select from '../../components/select';
import './styles.scss';
import {
  a11yValueShape,
  labelContentShape,
  optionValuesShape,
} from '../../common/prop-types';

const RowInColumn = ({ a11yValue, labelContent, optionValues, step, titleContent }) => {
  const a11yTitle = `${a11yValue}-select`;

  return (
    <div className="row-in-column">
      <h1>{`${step}:`}</h1>
      <div className='row-input-wrapper'>
        <p>{titleContent}</p>
        <div className="row-input">
          <label
            for={a11yTitle}
            name={a11yTitle}
          >
            {`${labelContent}:`}
          </label>
          <Select
            a11yTitle={a11yTitle}
            optionValues={optionValues}
          />
        </div>
      </div>
    </div>
  );
};

RowInColumn.propTypes = {
  a11yValue: a11yValueShape,
  labelContent: labelContentShape,
  optionValues: optionValuesShape,
};
export default RowInColumn;