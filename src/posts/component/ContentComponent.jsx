import { Button, CardContent, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function ContentComponent({ post }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleMore = () => {
        setIsExpanded(!isExpanded);
    }

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
                <Paper sx={{ marginBottom: 2, backgroundColor: '#88adbf', color: '#212121', p: '2%', fontFamily: 'Roboto', textAlign: 'justify' }}>
                    {isExpanded ? post.content : `${post.content.substring(0, 300)}...`}
                    <Button onClick={toggleMore}>{isExpanded ? 'Show Less' : 'Read More'}</Button>
                </Paper>
                <Divider />
            </CardContent>
        </>
    )
}
