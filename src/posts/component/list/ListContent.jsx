import { Button, Paper } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModule';

export default function ListContent({ post }) {
    const navigate = useNavigate();

    const truncateContent = (content, length) => {
        const div = document.createElement("div");
        div.innerHTML = content;
        return div.innerText.substring(0, length);
    };
    return (
        <Paper sx={{ p: '5px' }}>
            <div>
                {truncateContent(post.content, 300)}...
            </div>
            <Button onClick={() => navigate(ROUTES.POSTINFO + '/' + post._id)}>Read More</Button>
        </Paper>
    )
}
