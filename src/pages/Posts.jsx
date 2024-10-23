import React from 'react'
import PostsComponent from '../posts/component/PostsComponent'
import postsMock from '../posts/mockData'
import { Box } from '@mui/material';

let posts = postsMock;

export default function Posts() {

    return (
        <Box>
            {posts.map((post) => <PostsComponent post={post} key={post._id} />)}
        </Box>
    )
}
