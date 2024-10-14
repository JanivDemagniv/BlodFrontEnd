import { CardContent, Divider, Paper, Typography } from '@mui/material'
import React from 'react'

export default function ContentComponent({ post }) {
    return (
        <>
            <CardContent>
                <Typography>{post.album}</Typography>
                <Typography>{post.artist}</Typography>
                <Typography sx={{ fontSize: '2rem' }}>{post.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {post.subtitle}
                </Typography>
                <Divider />
            </CardContent>
            <CardContent>
                <Paper sx={{ marginBottom: 2 }}>
                    {post.content}
                </Paper>
                <Divider />
            </CardContent>
        </>
    )
}
