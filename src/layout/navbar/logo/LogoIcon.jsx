import React from 'react';
import AlbumIcon from '@mui/icons-material/Album';
import { IconButton, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes/routesModule';

export default function LogoIcon() {
    const navigate = useNavigate()
    return (
        <Link>
            <IconButton onClick={() => navigate(ROUTES.ROOT)}>
                <AlbumIcon />
            </IconButton>
        </Link>
    )
}
