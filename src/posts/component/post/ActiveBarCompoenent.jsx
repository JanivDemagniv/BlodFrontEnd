import { Box, CardActions, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModule';
import { useCurrentUser } from '../../../users/provider/UserProvider';
import DeleteDialogComponent from './DeleteDialogComponent';

export default function ActiveBarCompoenent({ post, handleDeletePost, handleLikePost, singlePost = false }) {
    const [isLike, setIsLike] = useState(false);
    const { user } = useCurrentUser();

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
    }, [post, user])

    const navigate = useNavigate()
    return (
        <CardActions sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: '1%'
        }}>
            <Box>
                {user ?
                    <IconButton onClick={() => { handleLikeOnScreen(); handleLikePost(post._id) }} sx={{ color: 'white' }}>
                        <FavoriteIcon sx={{ color: isLike ? 'red' : 'white' }} />
                    </IconButton> : null}
                {!singlePost ? <IconButton sx={{ color: 'white' }} onClick={() => { navigate(ROUTES.POSTINFO + '/' + post._id) }} aria-label='Article'>
                    <ArticleIcon />
                </IconButton> : null}
            </Box>
            <Box>
                {user && user._id === post.creator._id && user.isCreator || user && user.isAdmin ?
                    <IconButton onClick={() => { navigate(ROUTES.EDITPOST + '/' + post._id) }} sx={{ color: 'white' }} aria-label='Edit'>
                        <EditIcon />
                    </IconButton> : null}
                {user && user._id === post.creator._id && user.isCreator || user && user.isAdmin ? <DeleteDialogComponent handleDelete={handleDeletePost} postID={post._id} /> : null}
            </Box>
        </CardActions>
    )
}
