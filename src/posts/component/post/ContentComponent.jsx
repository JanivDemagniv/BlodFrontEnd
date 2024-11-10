import { Button, CardContent, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '../../../providers/CustomTheme';
import { capitalizeWords } from '../../../helpers/generalFunctions';

export default function ContentComponent({ post }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const { isDark } = useTheme();

    const toggleMore = () => {
        setIsExpanded(!isExpanded);
    };

    const truncateContent = (content, length) => {
        const div = document.createElement("div");
        div.innerHTML = content;
        return div.innerText.substring(0, length);
    };

    return (
        <>
            <CardContent>
                <Typography>{capitalizeWords(post.album)}</Typography>
                <Typography>{capitalizeWords(post.artist)}</Typography>
                <Typography sx={{ fontSize: '2rem' }}>{capitalizeWords(post.title)}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {capitalizeWords(post.subtitle)}
                </Typography>
                <Divider />
            </CardContent>
            <CardContent>
                <Paper component='div' sx={{ marginBottom: 2, bgcolor: isDark ? '#4A6572' : '#FDD835', color: '#212121', p: '2%', fontFamily: 'Roboto', textAlign: 'justify' }}>
                    {isExpanded ? (
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    ) : (
                        <div>
                            {truncateContent(post.content, 300)}...
                        </div>
                    )}
                    <Button onClick={toggleMore}>{isExpanded ? 'Show Less' : 'Read More'}</Button>
                </Paper>
                <Divider />
            </CardContent>
        </>
    )
}
