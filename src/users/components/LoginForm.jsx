import { Box, Button } from '@mui/material';
import React from 'react';
import Form from '../../forms/components/Form';
import ROUTES from '../../routes/routesModule';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FormButton from '../../forms/components/FormButton';
import Input from '../../forms/components/Input';


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
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
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
                />
                <Input
                    name='password'
                    label='password'
                    type='password'
                    error={errors.password}
                    onChange={onInputChange}
                    data={data}
                />
                <FormButton
                    sx={{ width: '100%' }}
                    variant='outlined'
                    to={ROUTES.ROOT}
                    startIcon={<AccountBoxIcon />}
                    node='Sign Up'
                />
            </Form>
        </Box>
    )
}
