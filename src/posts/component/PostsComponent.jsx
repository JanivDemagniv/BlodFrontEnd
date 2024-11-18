import * as React from 'react';
import Card from '@mui/material/Card';
import CommentsComponent from './CommentsComponent';
import HeaderComponent from './post/HeaderComponent';
import ContentComponent from './post/ContentComponent';
import ActiveBarCompoenent from './post/ActiveBarCompoenent';
import { Grow } from '@mui/material';

export default function PostComponent({ post, handleLikeComment, handleEditComment, handleDeleteComment, handleNewComment, handleDeletePost, handleLikePost, checked = false }) {


    return (
        <Grow in={!checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
            <Card sx={{ maxWidth: { xs: '100vw', md: '55vw' }, m: '20px auto' }}>
                <HeaderComponent post={post} />
                <ContentComponent post={post} />
                {post.comments.length < 0 ? <></> :
                    <CommentsComponent
                        handleDelete={handleDeleteComment}
                        handleLike={handleLikeComment}
                        handleEdit={handleEditComment}
                        handleNewComment={handleNewComment}
                        post={post}
                    />}
                <ActiveBarCompoenent handleDeletePost={handleDeletePost} handleLikePost={handleLikePost} post={post} />
            </Card>
        </Grow>
    );
}