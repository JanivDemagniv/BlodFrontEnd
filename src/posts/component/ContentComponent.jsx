import { Button, CardContent, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '../../providers/CustomTheme';

export default function ContentComponent({ post }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { isDark } = useTheme();
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
                <Paper sx={{ marginBottom: 2, bgcolor: isDark ? '#4A6572' : '#FDD835', color: '#212121', p: '2%', fontFamily: 'Roboto', textAlign: 'justify' }}>
                    {isExpanded ? post.content : `${post.content.substring(0, 300)}...`}
                    <Button onClick={toggleMore}>{isExpanded ? 'Show Less' : 'Read More'}</Button>
                </Paper>
                <Divider />
            </CardContent>
        </>
    )
}
