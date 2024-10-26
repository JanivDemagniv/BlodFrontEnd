import { Avatar, Box, CardHeader, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CommentsComponent from './CommentsComponent';
import usePosts from '../hooks/usePosts';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';

export default function Post() {
    const { id } = useParams()
    const { isLoading, error, handleGetPostById, postDetailsData } = usePosts();

    useEffect(() => {
        handleGetPostById(id)
    }, [])

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (postDetailsData && postDetailsData.length == 0 || postDetailsData == undefined) return <Typography>There is no posts to display</Typography>
    if (postDetailsData) return (
        <Box sx={{ p: '2%', borderRadius: '2%' }}>
            <Box sx={{ pl: '15px', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '2%' }}>
                <Box>
                    <Box component='img' src={postDetailsData.image.url} sx={{ maxWidth: { xs: '150px', md: '400px' }, height: { xs: '150px', md: '400px' }, borderRadius: '5%' }} />
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" src={postDetailsData.creator.image.url} />
                        }
                        title={postDetailsData.creator.name}
                        subheader={postDetailsData.createdAt}
                    />
                </Box>
                <Box sx={{ p: '2%' }}>
                    <Typography variant='h2' sx={{ p: '1%', fontSize: '1.5rem' }}>{postDetailsData.album}</Typography>
                    <Typography variant='h6' sx={{ fontSize: '1rem' }}>{postDetailsData.artist}</Typography>
                    <Typography variant='h6' sx={{ fontSize: '1rem' }}>{postDetailsData.title}</Typography>
                    <Typography variant='h6' sx={{ fontSize: '1rem' }}>{postDetailsData.subtitle}</Typography>
                    <Paper sx={{ p: '2%', textAlign: 'justify' }}>
                        {postDetailsData.content}
                    </Paper>
                </Box>
            </Box>
            <Box>
                <CommentsComponent post={postDetailsData} />
            </Box>
        </Box>
    )
}
