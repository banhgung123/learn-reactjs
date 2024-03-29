import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';

FilterByService.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.object,
};

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`
    },

    list: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        
        '& > li': {
            margin: 0,
        }
    }
    
}));

function FilterByService({ filters = {}, onChange }) {
    const classes = useStyles();

    const services = [
        { value: 'isPromotion', label: 'Có khuyến mãi' },
        { value: 'isFreeShip', label: 'Vận chuyển miễn phí' }
    ];

    const handleChange = (e) => {
        if (!onChange) return;
        const { name, checked } = e.target;
        onChange({ [name]: checked });
    };

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DỊCH VỤ</Typography>

            <ul className={classes.list}>
                {services.map(service => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={<Checkbox
                                checked={Boolean(filters[service.value])}
                                onChange={handleChange}
                                name={service.value}
                                color="primary" 
                            />}
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;