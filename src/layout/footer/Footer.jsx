import { Box, Paper } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Box sx={{ width: '100%', bgcolor: '#232F34', minHeight: '20vh', p: "30px" }}>
            <Paper sx={{ m: '10px' }}>
                About
            </Paper>
            <Paper sx={{ m: '10px' }}>
                What
            </Paper>
            <Paper sx={{ m: '10px' }}>
                Yo
            </Paper>
        </Box>
    )
}
