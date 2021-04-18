import { FormHelperText, TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
}

PasswordField.defaultProps = {
    label: '',
    disabled: false
}

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const { formState } = form;
    const hasError = formState.errors[name] !== undefined;
    // const { errors } = form;
    // const hasError = errors[name] !== undefined;
    
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(x => !x);
    };
    
    return (
        <FormControl fullWidth margin="normal" variant="outlined" error={hasError}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                render={({
                    field: { onChange, onBlur, value, name, ref }
                }) => (
                    <OutlinedInput
                        id={name}
                        type={showPassword ? 'text' : 'password'}
                        label={label}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={toggleShowPassword}
                                edge="end"
                                >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        disabled={disabled}
                        value={value}
                        oncChange={onChange}
                        onBlur={onBlur}
                    />
                )}
            />
            <FormHelperText error={hasError}>{formState.errors[name]}</FormHelperText>
        </FormControl>
    );
}

export default PasswordField;