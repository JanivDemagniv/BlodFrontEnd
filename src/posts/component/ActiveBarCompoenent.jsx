import { Box, CardActions, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModule';

export default function ActiveBarCompoenent({ post }) {
    const navigate = useNavigate()
    return (
        <CardActions sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: '1%'
        }}>
            <Box>
                <IconButton sx={{ color: 'white' }} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }} aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }} onClick={() => { navigate(ROUTES.POSTINFO + '/' + post._id) }} aria-label='Article'>
                    <ArticleIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton sx={{ color: 'white' }} aria-label='Edit'>
                    <EditIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }} aria-label='Delete'>
                    <DeleteIcon />
                </IconButton>
            </Box>
        </CardActions>
    )
}
