import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

export default function SearchParameterSelect({ parameter, handleParameter, sx }) {
    return (
        <FormControl sx={{ ...sx, width: '150px' }}>
            <InputLabel>Parameter</InputLabel>
            <Select
                size='small'
                value={parameter}
                label="Parameter"
                onChange={handleParameter}
            >
                <MenuItem value={'title'}>Title</MenuItem>
                <MenuItem value={'subtitle'}>Subtitle</MenuItem>
                <MenuItem value={'artist'}>Artist</MenuItem>
                <MenuItem value={'album'}>Album</MenuItem>
            </Select>
        </FormControl>
    )
}
