import { Grid2, TextField } from '@mui/material'
import React from 'react'

const Input = ({
    variant = 'outlined',
    type = 'text',
    name,
    data,
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
                label={label}
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