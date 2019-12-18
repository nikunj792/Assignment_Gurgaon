import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../atoms/Label/label';
import Input from '../../atoms/Input/input';

const UserInput = ({
    labelText,
    inputId,
    inputName,
    handleInputChange,
    inputDisabled,
    dataLocator,
    ariaLabel,
    inputValue,
}) => {
    return (
        <div className="user-input-container">
            <Label dataLocator={dataLocator} ariaLabel={ariaLabel} labelText={labelText}>
                <div className="input-data">
                    <Input dataLocator={dataLocator} inputValue={inputValue} ariaLabel={ariaLabel} inputId={inputId} inputDisabled={inputDisabled} inputName={inputName} handleInputChange={handleInputChange} />
                </div>
            </Label>
        </div>
    )
}

UserInput.propTypes = {
    className: PropTypes.string,
    ariaLabel: PropTypes.string.isRequired,
    disabled: PropTypes.string,
    dataLocator: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
};

UserInput.defaultProps = {
    disabled: '',
};

export default UserInput;