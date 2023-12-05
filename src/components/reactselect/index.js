import React from 'react';
import Select from 'react-select';
import './style.css';
import SelectVectorIcon from '../../images/select-vector-icon.svg';
const SelectField = (props) => {
  const {
    placeholder,
    handleChange,
    optionsList,
    isDisabled,
    bgColor = '#F9F9F9',
    value,
    border = 'transparent',
    height = '55px',
  } = props;
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      fontSize: '18px',
      fontStyle: 'italic',
      fontFamily: 'Poppins',
      color: state.isSelected ? '#212529' : '#7D7D7D',
      backgroundColor: state.isSelected ? '#F9F9F9' : '#fff',
      cursor: 'pointer',
      textTransform: 'capitalize',
    }),
    control: (defaultStyles, state) => ({
      ...defaultStyles,
      cursor: 'pointer',
      backgroundColor: bgColor,
      padding: '6px 22px',
      borderRadius: '100px;',
      boxShadow: 'none',
      height: height,
      outline: 'none',
      fontSize: '18px',
      fontStyle: 'italic',
      fontFamily: 'Poppins',
      border: border,
      color: '#7D7D7D',
      backgroundImage: `url(${SelectVectorIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'calc(100% - 2rem)',
      textTransform: 'capitalize',
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: '#7D7D7D',
      fontStyle: 'italic',
      fontFamily: 'Poppins',
      textTransform: 'capitalize',
      fontSize: '16px',
    }),
  };

  const optionsArray = (inputArr) => {
    let options = [];
    inputArr.forEach((item) => {
      let optObj = { value: item, label: item };
      options.push(optObj);
    });
    return options;
  };

  const options = optionsArray(optionsList);
  return (
    <>
      <Select
        styles={customStyles}
        placeholder={placeholder}
        options={options}
        onChange={handleChange}
        isDisabled={isDisabled}
        className="select-field"
        isSearchable={false}
        value={value}
      />
    </>
  );
};

export default SelectField;
