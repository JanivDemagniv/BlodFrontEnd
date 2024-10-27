import { Box, TextField } from '@mui/material'
import React from 'react'

const Input = ({
    variant = 'outlined',
    type = 'text',
    name,
    data,
    label,
    required = true,
    error,
    onChange }) => {
    return (
        <Box>
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
                sx={{
                    m: '5px', "& .MuiInputLabel-outlined": {
                        color: "#ff6f00",
                        fontWeight: "bold",
                    }
                }}
                fullWidth
                autoComplete='off'
            />
        </Box>
    )
}

export default Input;