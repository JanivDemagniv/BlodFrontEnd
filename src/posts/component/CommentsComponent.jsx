import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, CardContent, TextField } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
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
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1.5%' }}>
                        <Avatar sx={{ alignSelf: 'center' }} />
                        <TextField multiline minRows='2' variant='filled' sx={{ flexGrow: '1 ', minWidth: '50%' }} />
                        <Button sx={{ flexGrow: '1', minWidth: '50%' }}>Send</Button>
                    </Box>
                </AccordionDetails>
            </Accordion>

        </CardContent >
    )
}
