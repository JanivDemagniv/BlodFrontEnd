import { Grid2, TextField } from '@mui/material'
import React from 'react'
import { capitalizeWords } from '../../helpers/generalFunctions'

const Input = ({
    variant = 'outlined',
    type = 'text',
    name,
    date,
    label,
    required = true,
    error,
    onChange,
    ...rest
}) => {
    return (
        <Grid2 item xs={12} {...rest}>
            <TextField
                variant={variant}
                label={capitalizeWords(label)}
                type={type}
                id={name}
                name={name}
                value={data[name] ? data[name] : ""}
                required={required}
                helperText={error}
                error={Boolean(error)}
                onChange={onChange}
                fullWidth
                autoComplete='off'
            />
        </Grid2>
    )
}

export default Input;