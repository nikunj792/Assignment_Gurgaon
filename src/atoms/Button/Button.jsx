import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  children,
  className,
  ariaLabel,
  disabled,
  type,
  dataLocator,
  handleBtnClick,
  ...otherProps
}) => {
    return (
      <button
        disabled={disabled}
        aria-label={ariaLabel}
        className={`button ${className}`}
        type={type}
        data-locator={dataLocator}
        onClick={handleBtnClick}
        {...otherProps}
      >
        {children}
      </button>
    );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  dataLocator: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: '',
  type: 'button',
};

export default Button;
