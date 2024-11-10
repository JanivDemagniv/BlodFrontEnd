import { Box, Paper } from '@mui/material'
import React from 'react'
import PageHeader from '../components/PageHeader'

export default function JoinUs() {
    return (
        <Box>
            <PageHeader title='Wanna Join Us?' subtitle='Join us and write you own album reviews' />
            <Box sx={{ minHeight: '50vh' }}>
                <Paper sx={{ p: '10px' }}>
                    wanna join our creator crew? <br />
                    send us mail to: musicblog@musicBlog.com
                    <br />
                    with a reviw for example<br />
                    let us also know about your passion for music, and tell us some cool thig about yourself
                </Paper>
            </Box>
        </Box>
    )
}
