import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import PageHeader from '../components/PageHeader'

export default function About() {
    let content = `At Music Blog, we’re driven by a deep love for music and a commitment to bringing insightful, in-depth album reviews to every listener who shares our passion. Our vision is simple: to create a space where every album, old or new, is explored with care and attention, helping our readers connect with music on a more meaningful level.

                    Whether you’re discovering a new artist or revisiting a classic, our reviews aim to provide the context, emotions, and stories behind each album, guiding you through every note, lyric, and beat.We believe that music is more than just sound—it’s an experience, and our mission is to help you experience it in the fullest way possible.`

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PageHeader title='About Us' subtitle='our story' />
            <Paper sx={{ p: '10px', mb: '10px', width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />
            </Paper>
        </Box>
    )
}
