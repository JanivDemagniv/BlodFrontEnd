import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Spinner = ({ color = 'primary', size = 40, height = '50vh' }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                minHeight: { height }
            }}>
            <CircularProgress
                color={color}
                size={size}
                sx={{ alignSelf: 'center' }}
            />
        </Box>
    )
}

export default Spinner;
