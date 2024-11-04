import React, { useEffect } from 'react'
import useUsers from '../hooks/useUsers'
import useForm from '../../forms/hooks/useForm';
import { useCurrentUser } from '../provider/UserProvider';
import { Box } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import editSchema from '../models/editSchema';
import initialEditForm from '../helpers/initialForms/initialEditForm';
import EditForm from '../components/EditForm';
import normalizeUpdateUser from '../helpers/normlization/normalizeUpdateUser';
import { getUser } from '../services/localStorageService';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

export default function EditProfilePage() {
    const { handleUpdateUser, handleGetUserById, userDeatails, isLoading, error } = useUsers();
    const { user } = useCurrentUser();
    const {
        data,
        setData,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit
    } = useForm(initialEditForm, editSchema, (data) => { handleUpdateUser(user._id, data) });

    useEffect(() => {
        if (!user) {
            getUser()
        } else if (userDeatails && userDeatails !== undefined && userDeatails !== null) {
            const newdata = normalizeUpdateUser(userDeatails)
            setData(newdata)
        } else {
            handleGetUserById(user._id)
        }
    }, [userDeatails, user])

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (userDeatails == undefined || userDeatails == null) return <Typography>Sorry there is no user like that</Typography>
    return (
        <Box>
            <PageHeader title='edit profile' subtitle='keep your profile updated at all time' />
            <EditForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title={'edit your profile'}
                errors={errors}
                data={data}
                onInputChange={handleChange}
            />
        </Box>
    )
}
