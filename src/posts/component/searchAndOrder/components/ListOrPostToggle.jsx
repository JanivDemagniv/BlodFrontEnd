import { Box, FormControlLabel, Switch } from '@mui/material'
import React from 'react'

export default function ListOrPostToggle({ isList, handleToggle, sx, checked }) {
    return (
        <FormControlLabel sx={{ ...sx }}
            control={<Switch checked={checked} onClick={handleToggle} />}
            label={isList ? 'Posts' : 'List'}
        />
    )
}
