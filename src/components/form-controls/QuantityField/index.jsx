import { Box, FormHelperText, IconButton, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool
}

QuantityField.defaultProps = {
    label: '',
    disabled: false
}

const useStyles = makeStyles(theme => ({
    root: {},

    box: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        maxWidth: '200px',
    },
}));

function QuantityField(props) {
    const classes = useStyles();
    const { form, name, label } = props;
    const { formState, setValue } = form;
    const hasError = formState.errors[name] !== undefined;
    // const { errors } = form;
    // const hasError = errors[name] !== undefined;
    
    return (
        <FormControl fullWidth margin="normal" variant="outlined" error={hasError} size="small">
            <Typography>{label}</Typography>
            <Controller
                name={name}
                control={form.control}
                render={({
                    field: { onChange, onBlur, value, name, ref },
                }) => (
                    <Box className={classes.box}>
                        <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <OutlinedInput  
                            id={name}
                            type="number"
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </Box>
                )}
            />
            <FormHelperText error={hasError}>{formState.errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default QuantityField;