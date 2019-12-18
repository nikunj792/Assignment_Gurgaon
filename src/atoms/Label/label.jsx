import React from 'react';
import PropTypes from 'prop-types';

const Label = ({
    className,
    labelText,
    ariaLabel,
    dataLocator,
    children,
    id,
    ...otherProps
}) => {
    return (
        <label
            htmlFor={labelText}
            className={`label ${className}`}
            data-locator={dataLocator}
            aria-label={ariaLabel}
            {...otherProps}
        >
            <div className="label-placeholder">{labelText}</div>
            {children}
        </label>
    );
};


Label.propTypes = {
    className: PropTypes.string,
    ariaLabel: PropTypes.string.isRequired,
    disabled: PropTypes.string,
    dataLocator: PropTypes.string.isRequired,
};

Label.defaultProps = {
    disabled: '',
    labelText: 'Enter Data',
    className: ''
};

export default Label;