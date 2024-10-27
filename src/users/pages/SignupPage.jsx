import React from 'react'
import useUsers from '../hooks/useUsers'
import useForm from '../../forms/hooks/useForm';
import initialSignupForm from '../helpers/initialForms/initialSignUpForm';
import signupSchema from '../models/signupSchema';
import { useCurrentUser } from '../provider/UserProvider';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModule';
import { Box } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import SignupForm from '../components/SignupForm';

export default function SignupPage() {
    const { handleSignup } = useUsers();
    const {
        data,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit
    } = useForm(initialSignupForm, signupSchema, handleSignup);

    const { user } = useCurrentUser();

    if (user) return <Navigate to={ROUTES.ROOT} replace />

    return (
        <Box>
            <PageHeader title='Signup Page' subtitle='Signup for the website' />
            <SignupForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title={'register form'}
                errors={errors}
                data={data}
                onInputChange={handleChange}
            />
        </Box>
    )
}
