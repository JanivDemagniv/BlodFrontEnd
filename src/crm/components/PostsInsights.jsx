import React, { useEffect, useState } from 'react'
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { Box, Typography } from '@mui/material';
import useAdmin from '../hooks/useAdmin';
import ListComponent from '../../posts/component/ListComponent';
import PageHeader from '../../components/PageHeader';

export default function PostsInsights() {
    const { error, isLoading, handleAdminPosts, posts } = useAdmin();
    const [mostLike, setMostLike] = useState();
    const [mostComment, setMostCommet] = useState()


    useEffect(() => {
        if (!posts) {
            handleAdminPosts();
        }
        if (posts) {
            let sortedLikeArray = posts.toSorted((a, b) => a.likes.length < b.likes.length ? 1 : -1)
            setMostLike(sortedLikeArray);
            console.log(mostLike);

            let sortedCommentArray = posts.toSorted((a, b) => a.comments.length < b.comments.length ? 1 : -1)
            setMostCommet(sortedCommentArray);
        }
    }, [posts])

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (posts && posts.length === 0 || posts === undefined || posts === null) return <Typography>something went wrong</Typography>
    if (mostLike && mostLike.length > 0)
        return (
            <Box>
                <PageHeader title='Posts Insights' subtitle='See all posts details' />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography>Most likes Posts : {mostLike[0].likes.length} , {mostLike[0].title}</Typography>
                    {<ListComponent post={mostLike[0]} />}
                    <Typography>Most Comments Posts : {mostComment[0].comments.length} , {mostComment[0].title}</Typography>
                    {<ListComponent post={mostComment[0]} />}
                </Box>
            </Box>
        )

}
