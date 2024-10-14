import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

export default function CommentContentComponent({ comment }) {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={comment.creator.image.alt} src={comment.creator.image.url} />
            </ListItemAvatar>
            <ListItemText
                primary={comment.creator.name}
                secondary={
                    <React.Fragment>
                        <Paper sx={{ p: '2%' }}>
                            {comment.content}
                        </Paper>
                        <Typography variant='caption'>
                            {comment.createdAt}
                        </Typography>
                    </React.Fragment>
                }
            />
            <Divider variant="inset" component="li" />
        </ListItem>


    )
}
