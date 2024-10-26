import { Box, Button, Grid2 } from '@mui/material';
import React from 'react';
import Form from '../../forms/components/Form';
import Input from '../../forms/components/input';
import ROUTES from '../../routes/routesModule';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


export default function LoginForm({
    errors,
    onInputChange,
    data,
    title,
    validateForm,
    onReset,
    onSubmit
}) {
    return (
        <Box>
            <Form
                onSubmit={onSubmit}
                onReset={onReset}
                validateForm={validateForm}
                title={title}
            >
                <Input
                    name='email'
                    label='email'
                    type='email'
                    error={errors.email}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name='password'
                    label='password'
                    type='password'
                    error={errors.password}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Grid2 item xs={12} sm={12}>
                    <Button
                        sx={{ width: '100%' }}
                        variant='outlined'
                        to={ROUTES.ROOT}
                        startIcon={<AccountBoxIcon />}
                    >
                        Sign Up
                    </Button>
                </Grid2>
            </Form>
        </Box>
    )
}
