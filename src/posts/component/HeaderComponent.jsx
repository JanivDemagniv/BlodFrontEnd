import { Avatar, CardHeader, CardMedia } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

export default function HeaderComponent({ post }) {
    return (
        <>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {post.creatorName}
                    </Avatar>
                }
                title={post.album}
                subheader={post.createdAt}
            />
            <CardMedia
                component="img"
                height="400"
                image={post.image.url}
                alt={post.image.alt}
            />
        </>
    )
}
