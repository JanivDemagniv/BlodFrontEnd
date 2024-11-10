import React, { useEffect } from 'react';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import PageHeader from '../components/PageHeader';
import PostsComponent from '../posts/component/PostsComponent'
import usePosts from '../posts/hooks/usePosts';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../routes/routesModule';
import { useCurrentUser } from '../users/provider/UserProvider';



export default function MainPage() {
    const { postsData, isLoading, error, handleGetAllPosts, handleCommentLike, handleDeleteComment, handleUpdateComment, handleNewComment, handlePostLike, handleDeletePost } = usePosts();
    const navigate = useNavigate();
    const { user } = useCurrentUser();

    useEffect(() => {
        handleGetAllPosts();
    }, [])

    const latestPost = postsData.toSorted((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (postsData)
        return (
            <Box>
                <PageHeader title='Music Lover Blog' subtitle='All Albums Review in one Amazing Blog' />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                    {!user ? <Box><Typography>The Music Blog</Typography>
                        <Divider sx={{ width: '20%' }} />
                        <Paper sx={{ p: '10px', m: '15px 0' }}>
                            Here you can find albums reviews. we work hard to bring you the best albums review there is.
                            <br />
                            <br />
                            <span style={{ textDecoration: 'underLine', fontWeight: 'bold' }}>Albums Review</span> <br />
                            under 'post' you can find all our albums reviews, we try to cover all types and sort of music. <br />
                            from the best rappers to jazz artists, rock n' roll, blues, you just name it!
                            <br />
                            <br />
                            <span style={{ textDecoration: 'underLine', fontWeight: 'bold' }}>Did You Liked The Review?</span> <br />
                            Prees the heart button to save the post in your favurites reviews. <br />
                            and come back later to see what album you wannted to listen to!
                            <br />
                            <br />
                            <span style={{ textDecoration: 'underLine', fontWeight: 'bold' }}>Do You Want To Write Your Own Reviews?</span> <br />
                            Sure thing, send us a mail with your details, a bit about you and a review for example <br />
                            <br />
                            <br />
                            <span style={{ textDecoration: 'underLine', fontWeight: 'bold' }}>You Still Don't Have A User??</span> <br />
                            Just press the signup, a short process will reward you with a user - and from there, it's all about MUSIC
                        </Paper></Box> : null}
                    <Typography>Latest Post:</Typography>
                    <Divider sx={{ width: '20%' }} />
                    <PostsComponent post={latestPost[0]} handleDeleteComment={handleDeleteComment} handleDeletePost={handleDeletePost} handleEditComment={handleUpdateComment} handleLikeComment={handleCommentLike} handleLikePost={handlePostLike} handleNewComment={handleNewComment} />
                    <br />
                    <br />
                    {!user ? <Box sx={{ width: '50%', m: '10px auto', display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                        <Typography align='center'>
                            So, What are you Wating For?
                        </Typography>
                        <Button onClick={() => navigate(ROUTES.SIGNUP)}>SignUp</Button>
                        <Typography align='center'>
                            Already registered?
                        </Typography>
                        <Button onClick={() => navigate(ROUTES.LOGIN)}>Login</Button>
                    </Box> : null}
                </Box>
            </Box>
        )
}
