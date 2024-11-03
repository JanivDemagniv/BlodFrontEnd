import { Avatar, Box, CardHeader, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CommentsComponent from '../component/CommentsComponent';
import usePosts from '../hooks/usePosts';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { capitalizeWords } from '../../helpers/generalFunctions';
import PageHeader from '../../components/PageHeader';
import { useTheme } from '../../providers/CustomTheme';

export default function Post() {
    const { id } = useParams()
    const { isLoading, error, handleGetPostById, postDetailsData, handleCommentLike, handleDeleteComment, handleUpdateComment, handleNewComment } = usePosts();
    const { isDark } = useTheme();

    useEffect(() => {
        handleGetPostById(id)
    }, [])

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (postDetailsData && postDetailsData.length == 0 || postDetailsData == undefined) return <Typography>There is no posts to display</Typography>
    if (postDetailsData) return (
        <Box sx={{ p: '2%', borderRadius: '2%' }}>
            <PageHeader title={postDetailsData.title} subtitle={postDetailsData.subtitle} />
            <Box sx={{ pl: '15px', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '2%' }}>
                <Box>
                    <Box component='img' src={postDetailsData.image.url} alt={postDetailsData.image.alt} sx={{ maxWidth: { xs: '150px', md: '400px' }, height: { xs: '150px', md: '400px' }, borderRadius: '5%' }} />
                    <CardHeader sx={{ mt: '5px', bgcolor: isDark ? '#90A4AE' : '#ff9800', borderRadius: '10px' }}
                        avatar={
                            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe" src={postDetailsData.creator.image.url} alt={postDetailsData.creator.image.alt} />
                        }
                        title={capitalizeWords(postDetailsData.creator.name)}
                        subheader={postDetailsData.createdAt}
                    />
                </Box>
                <Box sx={{ p: '2%' }}>
                    <Typography variant='h2' sx={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'underline' }}>{capitalizeWords(postDetailsData.album)}</Typography>
                    <Typography variant='h6' sx={{ fontSize: '1rem' }}>{capitalizeWords(postDetailsData.artist)}</Typography>
                    <Paper sx={{ p: '2%', textAlign: 'justify' }}>
                        <div dangerouslySetInnerHTML={{ __html: postDetailsData.content }} />
                    </Paper>
                </Box>
            </Box>
            <Box>
                <CommentsComponent post={postDetailsData} expand={true} handleEdit={handleUpdateComment} handleLike={handleCommentLike} handleDelete={handleDeleteComment} handleNewComment={handleNewComment} />
            </Box>
        </Box>
    )
}
