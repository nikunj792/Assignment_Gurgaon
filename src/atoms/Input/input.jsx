import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const Input = ({
  className,
  inputId,
  inputName,
  ariaLabel,
  inputDisabled,
  dataLocator,
  handleInputChange,
  inputValue,
  ...otherProps
}) => {
    return (
      <input
        disabled={inputDisabled}
        id={inputId}
        name={inputName}
        aria-label={ariaLabel}
        className={`input  ${className}`}
        data-locator={dataLocator}
        value={inputValue}
        {...otherProps}
        onChange={(e)=>handleInputChange(e)}
      />
    );
};

Input.propTypes = {
  className: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  inputDisabled: PropTypes.string,
  dataLocator: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
};

Input.defaultProps = {
  inputDisabled: '',
};

export default Input;
