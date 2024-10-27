import { Avatar, Box, Button, TextField } from '@mui/material'
import React from 'react'
import { rplacePic } from '../../helpers/replaceValues'
import { useCurrentUser } from '../../users/provider/UserProvider'

export default function CommentSectionComponent() {
    const { user } = useCurrentUser();

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1.5%' }}>
            <Avatar sx={{ alignSelf: 'center' }} src={user ? user.profilePic.url : rplacePic.url} alt={user ? user.profilePic.alt : rplacePic.url} />
            <TextField multiline minRows='2' variant='filled' sx={{ flexGrow: '1 ', minWidth: '50%' }} />
            <Button sx={{ flexGrow: '1', minWidth: '50%' }}>Send</Button>
        </Box>
    )
}
