import { Avatar, Box, CardHeader, Paper, Typography } from '@mui/material'
import React from 'react'
import CommentsComponent from './CommentsComponent';
import postsMock from '../mockData';

let post = postsMock[0]


export default function Post() {
    return (
        <Box sx={{ backgroundColor: '#F9AA33', p: '2%', borderRadius: '2%' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '2%' }}>
                <Box>
                    <Box component='img' src='2014ForestHillsDrive.jpg' sx={{ maxWidth: { xs: '150px', md: '400px' }, height: { xs: '150px', md: '400px' }, borderRadius: '5%' }} />
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                {post.creatorName}
                            </Avatar>
                        }
                        title={post.creatorName}
                        subheader={post.createdAt}
                    />
                </Box>
                <Box sx={{ p: '2%' }}>
                    <Typography variant='h2' sx={{ p: '1%', fontSize: '1.5rem' }}>{post.album}</Typography>
                    <Typography variant='h6' sx={{ fontSize: '1rem' }}>{post.artist}</Typography>
                    <Typography variant='h6' sx={{ fontSize: '1rem' }}>{post.title}</Typography>
                    <Typography variant='h6' sx={{ fontSize: '1rem' }}>{post.subtitle}</Typography>
                    <Paper sx={{ p: '2%', textAlign: 'justify' }}>
                        {post.content}
                    </Paper>
                </Box>
            </Box>
            <Box>
                <CommentsComponent post={post} />
            </Box>
        </Box>
    )
}
