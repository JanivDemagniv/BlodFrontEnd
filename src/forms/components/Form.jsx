import { Box, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormButton from './FormButton';
import LoopIcon from "@mui/icons-material/Loop";
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';

const Form = ({
    title = '',
    onSubmit,
    onReset,
    validateForm,
    to = '/',
    color = 'inherit',
    spacing = 1,
    styles = {},
    children
}) => {
    const navigate = useNavigate();

    return (
        <Box
            component='form'
            color={color}
            sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
            onSubmit={onSubmit}
            autoComplete='off'
            noValidate
        >
            <Typography align='center' variant='h5' component='h1' mb={2}>
                {title.toUpperCase()}
            </Typography>
            <Box spacing={spacing}>
                {children}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Box>
                    <FormButton
                        node='Cancel'
                        color='error'
                        component='div'
                        variant='outlined'
                        onClick={() => navigate(to)}
                        icon={<CancelIcon fontSize='small' />}
                    />
                </Box>
                <Box>
                    <FormButton
                        node={<LoopIcon />}
                        variant='outlined'
                        component='div'
                        onClick={onReset}
                    />
                </Box>
                <Box>
                    <FormButton
                        node='Send'
                        icon={<SendIcon />}
                        onClick={onSubmit}
                        disabled={!validateForm()}
                        size='large'
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Form;
