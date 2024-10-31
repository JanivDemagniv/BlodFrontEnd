import { Avatar, Box, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditPostComponent from './EditPostComponent';
import usePosts from '../../hooks/usePosts';



export default function CommentContentComponent({ comment, user }) {
    console.log(comment);

    const [isLike, setIsLike] = useState(false);
    const { handleCommentLike, handleDeleteComment } = usePosts();

    const handleLikeColor = () => {
        setIsLike((p) => !p);
    };

    useEffect(() => {
        if (user) {
            if (comment.likes.includes(user._id)) {
                setIsLike(true)
            }
            if (!comment.likes.includes(user._id)) {
                setIsLike(false)
            }
        }
    }, [])

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={comment.creator.image.alt} src={comment.creator.image.url} />
            </ListItemAvatar>
            <ListItemText
                primary={comment.creator.name}
                secondary={
                    <>
                        <Paper sx={{ p: '2%', display: 'flex', flexDirection: 'column' }}>
                            {comment.content}
                        </Paper>
                        <Typography variant='caption'>
                            {comment.createdAt}
                        </Typography>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {user ? <IconButton onClick={() => { handleLikeColor(); handleCommentLike(comment._id, comment.post) }} size='small'>
                                <FavoriteIcon sx={{ color: isLike ? 'red' : 'white' }} fontSize="small" />
                            </IconButton> : null}
                            {user && user._id || user && user.isAdmin === comment.creator._id ?
                                <EditPostComponent comment={comment} /> : null}
                            {user || user && user.isAdmin && user._id === comment.creator._id ?
                                <IconButton onClick={() => { handleDeleteComment(comment._id, comment.post) }} size='small'>
                                    <DeleteIcon sx={{ color: 'white' }} fontSize="small" />
                                </IconButton> : null}
                        </Box>
                    </>
                }
            />
            <Divider variant="inset" component="li" />
        </ListItem>


    )
}
