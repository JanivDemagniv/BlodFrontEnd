import { Box, FormControlLabel, Switch } from '@mui/material'
import React from 'react'

export default function ListOrPostToggle({ isList, handleToggle, sx }) {
    return (
        <FormControlLabel sx={{ ...sx }}
            control={<Switch onClick={handleToggle} />}
            label={isList ? 'Posts' : 'List'}
        />
    )
}
