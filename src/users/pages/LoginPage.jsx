import React from 'react'
import useUsers from '../hooks/useUsers'
import useForm from '../../forms/hooks/useForm';
import initialLoginForm from '../helpers/initialForms/initialLoginForm';
import loginSchema from '../models/loginSchema';
import { Box } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
    const { error, handleLogin, isLoading } = useUsers();
    const {
        data,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
    } = useForm(initialLoginForm, loginSchema, handleLogin)

    return (
        <Box>
            <PageHeader title='Login' subtitle='Login if you already have a user' />
            <LoginForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title={'Login'}
                errors={errors}
                data={data}
                onInputChange={handleChange}
            />
        </Box>
    )
}
