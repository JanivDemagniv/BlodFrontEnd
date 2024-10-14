import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { CardActions, Divider, IconButton, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function Post({ post }) {


    return (
        <Card sx={{ maxWidth: '90%', m: '20px auto' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {post.creator}
                    </Avatar>
                }
                title={post.album}
                subheader={post.createdAt}
            />
            <CardMedia
                component="img"
                height="400"
                image={post.image.url}
                alt={post.image.alt}
            />
            <CardContent>
                <Typography>{post.album}</Typography>
                <Typography>{post.artist}</Typography>
                <Typography sx={{ fontSize: '2rem' }}>{post.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {post.subtitle}
                </Typography>
                <Divider />
            </CardContent>
            <CardContent>
                <Paper sx={{ marginBottom: 2 }}>
                    {post.content}
                </Paper>
                <Divider />
            </CardContent>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}