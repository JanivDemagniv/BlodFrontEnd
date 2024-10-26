import React, { useEffect } from 'react'
import PostsComponent from './PostsComponent'
import { Box, Typography } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import usePosts from '../hooks/usePosts';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

export default function Posts() {
    const { postsData, isLoading, error, handleGetAllPosts } = usePosts();

    useEffect(() => {
        handleGetAllPosts();
    }, [])

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (postsData && postsData.length == 0 || postsData == undefined) return <Typography>There is no posts to display</Typography>
    if (postsData) return (
        <Box>
            <PageHeader title='Posts' subtitle='All posts at one place' />
            {postsData.map((post) => <PostsComponent post={post} key={post._id} />)}
        </Box>
    )
}
