import { Box, IconButton, Paper, Typography } from '@mui/material'
import React from 'react';
import ListHeader from './list/ListHeader';
import ListContent from './list/ListContent';
import ListActiveBar from './list/ListActiveBar';
import ListImage from './list/ListImage';

export default function ListComponent({ post, handleDeletePost, handleLikePost }) {

    return (
        <Box sx={{ flexShrink: 0, m: '10px auto', width: { xs: '100%', md: '47%' }, bgcolor: '#ed6c02', borderRadius: '10px', p: '10px' }}>
            <ListHeader post={post} />
            <Box sx={{ display: 'flex' }}>
                <ListImage post={post} />
                <Box>
                    <ListContent post={post} />
                </Box>
                <ListActiveBar handleDelete={handleDeletePost} handleLike={handleLikePost} post={post} />
            </Box>
        </Box>
    )
}
