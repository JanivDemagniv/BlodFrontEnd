import * as React from 'react';
import Card from '@mui/material/Card';
import CommentsComponent from './CommentsComponent';
import HeaderComponent from './post/HeaderComponent';
import ContentComponent from './post/ContentComponent';
import ActiveBarCompoenent from './post/ActiveBarCompoenent';

export default function PostComponent({ post, handleLikeComment, handleEditComment, handleDeleteComment, handleNewComment }) {


    return (
        <Card sx={{ maxWidth: { xs: '100vw', md: '55vw' }, m: '20px auto' }}>
            <HeaderComponent post={post} />
            <ContentComponent post={post} />
            {post.comments.length < 0 ? <></> : <CommentsComponent handleDelete={handleDeleteComment} handleLike={handleLikeComment} handleEdit={handleEditComment} handleNewComment={handleNewComment} post={post} />}
            <ActiveBarCompoenent post={post} />
        </Card>
    );
}