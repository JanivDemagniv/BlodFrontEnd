import { Box } from '@mui/material'
import React from 'react'

export default function ListImage({ post }) {
    return (
        <Box sx={{ width: { xs: '120px', md: '150px' }, height: { xs: '120px', md: '150px' }, mr: '5px', overflow: 'hidden', flexShrink: 0, borderRadius: '5px' }}>
            <Box sx={{ width: { xs: '120px', md: '150px' }, objectFit: 'cover' }} component='img' src={post.image.url} alt={post.image.alt} />
        </Box>
    )
}
