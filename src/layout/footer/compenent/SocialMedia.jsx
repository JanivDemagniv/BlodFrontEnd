import { Box, IconButton } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

export default function SocialMedia() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'end', m: '0 10px' }}>
            <IconButton>
                <InstagramIcon />
            </IconButton>
            <IconButton>
                <FacebookIcon />
            </IconButton>
            <IconButton>
                <YouTubeIcon />
            </IconButton>
            <IconButton>
                <XIcon />
            </IconButton>
        </Box>
    )
}
