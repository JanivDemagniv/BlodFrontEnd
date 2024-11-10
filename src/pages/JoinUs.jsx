import { Box, Paper } from '@mui/material'
import React from 'react'
import PageHeader from '../components/PageHeader'

export default function JoinUs() {
    return (
        <Box>
            <PageHeader title='Wanna Join Us?' subtitle='Join us and write you own album reviews' />
            <Paper>
                wanna join our creator crew? <br />
                send us mail with a reviw for example<br />
                let us also know about your passion for music, and tell us some cool thig about yourself
            </Paper>
        </Box>
    )
}
