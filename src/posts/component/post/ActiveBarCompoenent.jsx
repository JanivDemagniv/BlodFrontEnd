import { Box, CardActions, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModule';
import { useCurrentUser } from '../../../users/provider/UserProvider';
import usePosts from '../../hooks/usePosts';

export default function ActiveBarCompoenent({ post }) {
    const [isLike, setIsLike] = useState(false);
    const { user } = useCurrentUser();
    const { handlePostLike, handleDeletePost } = usePosts();

    const handleLikeOnScreen = () => {
        setIsLike((p) => !p);
    };

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

    const navigate = useNavigate()
    return (
        <CardActions sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: '1%'
        }}>
            <Box>
                <IconButton onClick={() => { handleLikeOnScreen(); handlePostLike(post._id) }} sx={{ color: 'white' }} aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: isLike ? 'red' : 'white' }} />
                </IconButton>
                <IconButton sx={{ color: 'white' }} aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }} onClick={() => { navigate(ROUTES.POSTINFO + '/' + post._id) }} aria-label='Article'>
                    <ArticleIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton onClick={() => { navigate(ROUTES.EDITPOST + '/' + post._id) }} sx={{ color: 'white' }} aria-label='Edit'>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => { handleDeletePost(post._id) }} sx={{ color: 'white' }} aria-label='Delete'>
                    <DeleteIcon />
                </IconButton>
            </Box>
        </CardActions>
    )
}
