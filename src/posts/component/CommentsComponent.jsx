import { Accordion, AccordionDetails, AccordionSummary, CardContent } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CommentContentComponent from './comment/CommentContentComponent';
import { useTheme } from '../../providers/CustomTheme';
import { useCurrentUser } from '../../users/provider/UserProvider';
import CommentSectionComponent from './comment/CommentSectionComponent';

export default function CommentsComponent({ post, expand = false, handleLike, handleDelete, handleEdit, handleNewComment }) {
    const { isDark } = useTheme();
    const { user } = useCurrentUser();

    return (
        <CardContent>
            <Accordion defaultExpanded={expand} sx={{ backgroundColor: isDark ? '#4A6572' : '#FDD835', color: '#000' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Comments
                </AccordionSummary>
                <AccordionDetails>
                    <List sx={{ width: '100%', bgcolor: 'background.defult', color: '#000' }}>
                        {post.comments.map((comment) => <CommentContentComponent handleEdit={handleEdit} handleLike={handleLike} handleDelete={handleDelete} comment={comment} key={comment._id} user={user} />)}
                    </List>
                    {user ? <CommentSectionComponent postId={post._id} handleNewComment={handleNewComment} /> : null}
                </AccordionDetails>
            </Accordion>

        </CardContent >
    )
}
