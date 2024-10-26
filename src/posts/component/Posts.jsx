import React, { useEffect, useState } from 'react'
import PostsComponent from './PostsComponent'
import { Box, Pagination, Typography } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import usePosts from '../hooks/usePosts';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

export default function Posts() {
    const { postsData, isLoading, error, handleGetAllPosts } = usePosts();
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 3;
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;

    const currentItem = postsData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, value) => {
        setCurrentPage(value)
    }

    useEffect(() => {
        handleGetAllPosts();
    }, [])

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (postsData && postsData.length == 0 || postsData == undefined) return <Typography>There is no posts to display</Typography>
    if (postsData) return (
        <Box>
            <PageHeader title='Posts' subtitle='All posts at one place' />
            {currentItem.map((post) => <PostsComponent post={post} key={post._id} />)}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', p: '20px' }}>
                <Pagination
                    color="primary"
                    variant="outlined"
                    count={Math.ceil(postsData.length / itemPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </Box>
        </Box>
    )
}
