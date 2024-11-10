import { Box, Container, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '../../providers/CustomTheme'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModule';
import SocialMedia from './compenent/SocialMedia';

export default function Footer() {
    const { isDark } = useTheme();
    const navigate = useNavigate();

    return (
        <Box boxShadow={5} component='footer' sx={{ bgcolor: isDark ? '#3A444A' : '#ed6c02', width: '100%' }}>
            <Container sx={{
                minHeight: '20vh',
                p: "2% 20%",
                display: 'flex',
                gap: '5%',
                color: '#fff'
            }}>
                <List dense>
                    <Typography sx={{ textDecoration: 'underLine' }}>Navigate</Typography>
                    <ListItemButton onClick={() => navigate(ROUTES.ROOT)}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton onClick={() => navigate(ROUTES.POSTS)}>
                        <ListItemText primary='Posts' />
                    </ListItemButton>
                    <ListItemButton onClick={() => navigate(ROUTES.JOINUS)}>
                        <ListItemText primary='Join Us' />
                    </ListItemButton>
                </List>
                <List dense>
                    <Typography sx={{ textDecoration: 'underLine' }}>About Us</Typography>
                    <ListItem>
                        <ListItemText>
                            We love music—especially albums!<br />
                            Our passion drives us to bring you comprehensive reviews of albums across all genres, all in one place
                            <br />
                            <SocialMedia />
                        </ListItemText>
                    </ListItem>
                </List>
            </Container>
            <Box>
                <Typography sx={{ display: 'flex', justifyContent: 'flex-end', p: '0 2%', color: '#fff' }}>Yaniv Romem</Typography>
            </Box>
        </Box>
    )
}
