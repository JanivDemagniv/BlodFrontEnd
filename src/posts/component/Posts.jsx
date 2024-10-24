import React from 'react'
import PostsComponent from './PostsComponent'
import postsMock from '../mockData'
import { Box } from '@mui/material';
import PageHeader from '../../components/PageHeader';

let posts = postsMock;

export default function Posts() {

    return (
        <Box>
            <PageHeader title='Posts' subtitle='All posts at one place' />
            {posts.map((post) => <PostsComponent post={post} key={post._id} />)}
        </Box>
    )
}
