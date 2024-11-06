import React, { useEffect, useState } from 'react'
import PostsComponent from '../component/PostsComponent'
import { Box, FormControlLabel, Pagination, Switch, Typography } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import usePosts from '../hooks/usePosts';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import AddNewPostButton from '../component/AddNewPostButton';
import { useCurrentUser } from '../../users/provider/UserProvider';
import { Navigate, useSearchParams } from 'react-router-dom';
import ROUTES from '../../routes/routesModule';
import ListComponent from '../component/ListComponent';
import useSearch from '../hooks/useSearch';
import SearchAndOrderComponent from '../component/searchAndOrder/SearchAndOrderComponent';

export default function LikedPosts() {
    const { postsData, isLoading, error, handleGetAllPosts, handleCommentLike, handleDeleteComment, handleUpdateComment, handleNewComment, handlePostLike, handleDeletePost } = usePosts();
    const { isList, handleToggle, parameter, handleParameter, handleSearch } = useSearch();
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = isList ? 10 : 3;
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const { user } = useCurrentUser();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query' || '');

    const likedPosts = postsData.filter((post) => post.likes.includes(user._id));
    const searchPosts = query ? handleSearch(parameter, likedPosts, query) : likedPosts;
    const currentItem = searchPosts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        handleGetAllPosts();
    }, [])

    if (!user) return <Navigate to={ROUTES.ROOT} replace />
    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (postsData && postsData.length == 0 || postsData == undefined) return <Typography>There is no posts to display</Typography>
    if (postsData && user) return (
        <Box>
            <PageHeader title='Liked Posts' subtitle='All Posts I Liked' />
            <SearchAndOrderComponent isList={isList} handleToggle={handleToggle} handleParameter={handleParameter} parameter={parameter} />
            <Box sx={{ display: 'flex', flexDirection: isList ? 'row' : 'column', flexWrap: isList ? 'wrap' : 'nowrap' }}>
                {isList ? currentItem.map((post) => <ListComponent handleDeletePost={handleDeletePost} handleLikePost={handlePostLike} post={post} key={post._id} />) : currentItem.map((post) => <PostsComponent handleDeleteComment={handleDeleteComment} handleLikeComment={handleCommentLike} handleEditComment={handleUpdateComment} handleNewComment={handleNewComment} handleDeletePost={handleDeletePost} handleLikePost={handlePostLike} post={post} key={post._id} />)}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: '20px' }}>
                <Pagination
                    color="primary"
                    variant="outlined"
                    count={Math.ceil(likedPosts.length / itemPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            </Box>
            {user && user.isCreator || user && user.isAdmin ? <AddNewPostButton /> : null}
        </Box>
    )
}
