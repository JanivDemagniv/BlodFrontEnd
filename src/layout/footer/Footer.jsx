import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Box sx={{ bgcolor: '#232F34', }}>
            <Box sx={{
                width: '100%',
                minHeight: '20vh',
                p: "2% 20%",
                display: 'flex',
                gap: '5%',
                color: '#fff'
            }}>
                <List dense>
                    <Typography sx={{ textDecoration: 'underLine' }}>Navigate</Typography>
                    <ListItem>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Posts' />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary='Join Us' />
                    </ListItem>
                </List>
                <List dense>
                    <Typography sx={{ textDecoration: 'underLine' }}>About Us</Typography>
                    <ListItem>
                        <ListItemText>
                            We love music , espicelly albums<br />
                            we cheriche this site tot brig you<br />
                            all reviews of all albums
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <Typography sx={{ display: 'flex', justifyContent: 'flex-end', p: '0 2%', color: '#fff' }}>Yaniv Romem</Typography>
            </Box>
        </Box>
    )
}
