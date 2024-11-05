import { Avatar, Box, CardHeader, Typography } from '@mui/material'
import React from 'react'
import { capitalizeWords } from '../../../helpers/generalFunctions'

export default function ListHeader({ post }) {
    return (
        <Box sx={{ bgcolor: '#ed6c02' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" src={post.creator.image.url} alt={post.creator.image.alt} />
                }
                title={capitalizeWords(post.creator.name)}
                subheader={post.createdAt}
            />
            <Typography>{post.title}</Typography>
            <Typography>{post.subtitle}</Typography>
        </Box>
    )
}
