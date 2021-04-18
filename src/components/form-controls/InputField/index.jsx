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
    // const { formState } = form;
    // const hasError = formState.errors[name] !== undefined;
    return (
        <Controller
            name={name}
            control={form.control}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
            }) => (
                <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    label={label}
                    disabled={disabled}
                    error={invalid}
                    helperText={error?.message}
                    value={value}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            )
            }
        />
    )
}

export default InputField;