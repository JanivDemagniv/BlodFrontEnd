import { Box, Grow } from '@mui/material'
import React from 'react';
import ListHeader from './list/ListHeader';
import ListContent from './list/ListContent';
import ListActiveBar from './list/ListActiveBar';
import ListImage from './list/ListImage';
import { useTheme } from '../../providers/CustomTheme';

export default function ListComponent({ post, handleDeletePost, handleLikePost, checked = true }) {
    const { isDark } = useTheme()

    return (
        <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
        >
            <Box sx={{ flexShrink: 0, m: '10px auto', width: { xs: '95%', md: '47%' }, bgcolor: isDark ? '#607D8B' : '#ed6c02', borderRadius: '10px', p: '10px' }}>
                <ListHeader post={post} />
                <Box sx={{ display: 'flex' }}>
                    <ListImage post={post} />
                    <Box>
                        <ListContent post={post} />
                    </Box>
                    {handleDeletePost === undefined || handleLikePost === undefined ? null : <ListActiveBar handleDelete={handleDeletePost} handleLike={handleLikePost} post={post} />}
                </Box>
            </Box>
        </Grow>
    )
}
