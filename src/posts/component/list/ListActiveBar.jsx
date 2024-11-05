import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import ArticleIcon from '@mui/icons-material/Article';
import { Box, IconButton } from '@mui/material';
import { useCurrentUser } from '../../../users/provider/UserProvider';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModule';
import DeleteDialogComponent from '../post/DeleteDialogComponent';

export default function ListActiveBar({ post, handleLike, handleDelete }) {
    const [isLike, setIsLike] = useState();
    const { user } = useCurrentUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (post.likes.includes(user._id)) {
                setIsLike(true)
            }
            if (!post.likes.includes(user._id)) {
                setIsLike(false)
            }
        }
    }, [])

    return (
        <Box>
            {user ? <IconButton onClick={() => { handleLike(post._id) }}>
                <FavoriteIcon sx={{ color: isLike ? 'red' : 'white' }} />
            </IconButton> : null}
            <IconButton onClick={() => navigate(ROUTES.POSTINFO + '/' + post._id)}>
                <ArticleIcon sx={{ color: 'white' }} />
            </IconButton>
            {user && user.isCreator && user._id === post.creator._id || user && user.isAdmin ? <IconButton onClick={() => navigate(ROUTES.EDITPOST + '/' + post._id)}>
                <EditIcon sx={{ color: 'white' }} />
            </IconButton> : null}
            {user && user.isCreator && user._id === post.creator._id || user && user.isAdmin ? <DeleteDialogComponent handleDelete={handleDelete} postID={post._id} /> : null}
        </Box>
    )
}
