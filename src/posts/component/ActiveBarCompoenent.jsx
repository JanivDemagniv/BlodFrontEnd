import { CardActions, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ActiveBarCompoenent({ post }) {
    return (
        <CardActions sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: '1%'
        }}>
            <div>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </div>
            <div>
                <IconButton aria-label='Edit'>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label='Delete'>
                    <DeleteIcon />
                </IconButton>
            </div>
        </CardActions>
    )
}
