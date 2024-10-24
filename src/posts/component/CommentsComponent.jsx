import { Accordion, AccordionDetails, AccordionSummary, Box, CardContent, TextField } from '@mui/material'
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
                    <Box>
                        <TextField multiline minRows='2' variant='filled' sx={{ width: '100%' }} />
                    </Box>
                </AccordionDetails>
            </Accordion>

        </CardContent >
    )
}
