import * as React from 'react';
import Card from '@mui/material/Card';
import HeaderComponent from './HeaderComponent';
import ContentComponent from './ContentComponent';
import ActiveBarCompoenent from './ActiveBarCompoenent';
import CommentsComponent from './CommentsComponent';

export default function PostComponent({ post }) {


    return (
        <Card sx={{ maxWidth: { xs: '100vw', md: '55vw' }, m: '20px auto' }}>
            <HeaderComponent post={post} />
            <ContentComponent post={post} />
            {post.comments.length < 0 ? <></> : <CommentsComponent post={post} />}
            <ActiveBarCompoenent post={post} />
        </Card>
    );
}