import React from 'react';
import AlbumIcon from '@mui/icons-material/Album';
import { IconButton, Link } from '@mui/material';

export default function LogoIcon() {
    return (
        <Link>
            <IconButton>
                <AlbumIcon />
            </IconButton>
        </Link>
    )
}
