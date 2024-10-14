import { Accordion, AccordionDetails, AccordionSummary, CardContent, Paper } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CommentContentComponent from './CommentContentComponent';

export default function CommentsComponent({ post }) {
    return (
        <CardContent>
            <Accordion sx={{ backgroundColor: '#4A6572' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Comments
                </AccordionSummary>
                <AccordionDetails>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.defult' }}>
                        {post.comments.map((comment) => <CommentContentComponent comment={comment} key={comment._id} />)}
                    </List>
                </AccordionDetails>
            </Accordion>

        </CardContent >
    )
}
