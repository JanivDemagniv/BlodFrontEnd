import { Box, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormButton from './FormButton';
import LoopIcon from "@mui/icons-material/Loop";


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
            <Box container spacing={spacing}>
                {children}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Box>
                    <FormButton
                        node='cancel'
                        color='error'
                        component='div'
                        variant='outlined'
                        onClick={() => navigate(to)}
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
                        node='Submit'
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
