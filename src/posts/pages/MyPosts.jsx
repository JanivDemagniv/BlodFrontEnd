import React, { useEffect, useState } from 'react'
import PostsComponent from '../component/PostsComponent'
import { Box, FormControlLabel, Pagination, Switch, Typography } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import usePosts from '../hooks/usePosts';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import AddNewPostButton from '../component/AddNewPostButton';
import { useCurrentUser } from '../../users/provider/UserProvider';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModule';
import ListComponent from '../component/ListComponent';

export default function MyPosts() {
    const { postsData, isLoading, error, handleGetAllPosts, handleCommentLike, handleDeleteComment, handleUpdateComment, handleNewComment, handlePostLike, handleDeletePost } = usePosts();
    const [currentPage, setCurrentPage] = useState(1);
    const [isList, setIsList] = useState(false)
    const itemPerPage = 3;
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const { user } = useCurrentUser();

    const myPosts = postsData.filter((post) => post.creator._id === user._id)
    const currentItem = myPosts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        handleGetAllPosts();
    }, [])

    if (!user || user && !user.isAdmin && !user.isCreator) return <Navigate to={ROUTES.ROOT} replace />
    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (postsData && postsData.length == 0 || postsData == undefined) return <Typography>There is no posts to display</Typography>
    if (postsData && user && user.isAdmin || postsData && user && user.isCreator) return (
        <Box>
            <PageHeader title='Posts' subtitle='All posts at one place' />
            <FormControlLabel
                control={<Switch onClick={() => { setIsList((p) => !p) }} />}
                label={isList ? 'Posts' : 'List'}
            />
            <Box sx={{ display: 'flex', flexDirection: isList ? 'row' : 'column', flexWrap: isList ? 'wrap' : 'nowrap' }}>
                {isList ? currentItem.map((post) => <ListComponent handleDeletePost={handleDeletePost} handleLikePost={handlePostLike} post={post} key={post._id} />) : currentItem.map((post) => <PostsComponent handleDeleteComment={handleDeleteComment} handleLikeComment={handleCommentLike} handleEditComment={handleUpdateComment} handleNewComment={handleNewComment} handleDeletePost={handleDeletePost} handleLikePost={handlePostLike} post={post} key={post._id} />)}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: '20px' }}>
                <Pagination
                    color="primary"
                    variant="outlined"
                    count={Math.ceil(myPosts.length / itemPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </Box>
            {user && user.isCreator || user && user.isAdmin ? <AddNewPostButton /> : null}
        </Box>
    )
}
