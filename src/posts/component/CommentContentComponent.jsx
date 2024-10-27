import { Avatar, Box, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



export default function CommentContentComponent({ comment, user }) {
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
                            {user ? <IconButton size='small'>
                                <FavoriteIcon fontSize="small" />
                            </IconButton> : null}
                            {user || user && user.isAdmin && user._id === comment.creator._id ? <IconButton size='small'>
                                <DeleteIcon fontSize="small" />
                            </IconButton> : null}
                            {user && user._id || user && user.isAdmin === comment.creator._id ? <IconButton size='small'>
                                <EditIcon fontSize="small" />
                            </IconButton> : null}
                        </Box>
                    </>
                }
            />
            <Divider variant="inset" component="li" />
        </ListItem>


    )
}
