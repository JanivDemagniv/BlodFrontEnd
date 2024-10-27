import { Accordion, AccordionDetails, AccordionSummary, CardContent } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CommentContentComponent from './CommentContentComponent';
import { useTheme } from '../../providers/CustomTheme';
import { useCurrentUser } from '../../users/provider/UserProvider';
import CommentSectionComponent from './CommentSectionComponent';

export default function CommentsComponent({ post }) {
    const { isDark } = useTheme();
    const { user } = useCurrentUser();

    return (
        <CardContent>
            <Accordion sx={{ backgroundColor: isDark ? '#4A6572' : '#FDD835', color: '#000' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Comments
                </AccordionSummary>
                <AccordionDetails>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.defult', color: '#000' }}>
                        {post.comments.map((comment) => <CommentContentComponent comment={comment} key={comment._id} />)}
                    </List>
                    {user ? <CommentSectionComponent postId={post._id} /> : null}
                </AccordionDetails>
            </Accordion>

        </CardContent >
    )
}
