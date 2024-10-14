import { Box } from '@mui/material'
import React, { Children } from 'react'

export default function Main({ children }) {
    return (
        <Box sx={{ width: { xs: '100vw', md: '70vw' }, m: '0 auto', p: '30px' }}>
            {children}
        </Box>
    )
}
