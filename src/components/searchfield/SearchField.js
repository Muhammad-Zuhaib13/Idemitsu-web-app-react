import React from 'react';
import './style.css';

const SearchField = (props) => {
  const {
    selectName,
    value,
    handleChange,
    defaultOption,
    selectOptions,
    disabled = true,
    bgColor = '#E7E7E7',
  } = props;

  return (
    <>
      <select
        name={selectName}
        value={value}
        onChange={handleChange}
        id=""
        className="custom-select"
        disabled={disabled}
        style={{ backgroundColor: bgColor }}
      >
        <option value="" disabled hidden>
          {defaultOption}
        </option>
        {selectOptions.map((item, index) => {
          return (
            <option value={item} key={index} name={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SearchField;
