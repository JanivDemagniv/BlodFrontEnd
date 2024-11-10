import { Avatar, Box, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditPostComponent from './EditPostComponent';
import DeleteCommentDialogComponent from './DeleteCommentDialogComponent';



export default function CommentContentComponent({ comment, user, handleLike, handleDelete, handleEdit }) {
    const [isLike, setIsLike] = useState(false);

    const handleLikeColor = () => {
        setIsLike((p) => !p);
    };

    useEffect(() => {
        if (user && comment.likes) { // Check if comment.likes is defined
            if (comment.likes.includes(user._id)) {
                setIsLike(true);
            } else {
                setIsLike(false);
            }
        }
    }, [user, comment.likes]);

    return (
        <ListItem component='div' alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={comment.creator.image.alt} src={comment.creator.image.url} />
            </ListItemAvatar>
            <ListItemText
                primary={comment.creator.name}
                secondary={
                    <>
                        <Paper component='span' sx={{ p: '2%', display: 'flex', flexDirection: 'column' }}>
                            {comment.content}
                        </Paper>
                        <Typography variant='caption'>
                            {comment.createdAt}
                        </Typography>
                        <Divider component='li' />
                        <Box component='span' sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {user ? <IconButton onClick={() => { handleLikeColor(); handleLike(comment._id, comment.post) }} size='small'>
                                <FavoriteIcon sx={{ color: isLike ? 'red' : 'white' }} fontSize="small" />
                            </IconButton> : null}
                            {user && user.isAdmin || user && user._id === comment.creator._id ?
                                <EditPostComponent handleEdit={handleEdit} comment={comment} /> : null}
                            {user && user.isAdmin || user && user._id === comment.creator._id ?
                                <DeleteCommentDialogComponent handleDelete={handleDelete} postID={comment.post} commentId={comment._id} /> : null}
                        </Box>
                    </>
                }
            />
            <Divider variant="inset" component="li" />
        </ListItem>

    )
}
