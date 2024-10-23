import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../routes/routesModule'

export default function Error() {
    const navigate = useNavigate()
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component='img' src='./brokenError.png' />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ fontSize: { xs: '1rem', md: '2rem', p: '2%' } }}>
                    Error 404: Page not Found
                </Typography>
                <Button variant='outlined' onClick={() => navigate(ROUTES.ROOT)}>Return</Button>
            </Box>
        </Box>
    )
}
