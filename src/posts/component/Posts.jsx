import React from 'react'
import PostsComponent from './PostsComponent'
import postsMock from '../mockData'
import { Box } from '@mui/material';

let posts = postsMock;

export default function Posts() {

    return (
        <Box>
            {posts.map((post) => <PostsComponent post={post} key={post._id} />)}
        </Box>
    )
}
