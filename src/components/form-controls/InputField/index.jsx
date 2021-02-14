import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
}

InputField.defaultProps = {
    label: '',
    disabled: false
}

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors } = form;
    const hasError = errors[name] !== undefined;
    return (
        <Controller
            name={name}
            control={form.control}
            as={TextField}

            margin="normal"
            variant="outlined"
            fullWidth
            label={label}
            disabled={disabled}

            error={hasError}
            helperText={errors[name]?.message}
        />
    );
}

export default InputField;