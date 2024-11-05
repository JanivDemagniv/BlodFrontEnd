import React from 'react'
import usePosts from '../hooks/usePosts'
import useForm from '../../forms/hooks/useForm';
import initialPost from '../helpers/initialForms/initialPost';
import postSchema from '../models/postSchema';
import { Box } from '@mui/material';
import PostForm from '../component/PostForm';
import PageHeader from '../../components/PageHeader';
import { useCurrentUser } from '../../users/provider/UserProvider';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModule';

export default function AddPost() {
    const { handleCreatePost } = usePosts();
    const {
        data,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit
    } = useForm(initialPost, postSchema, handleCreatePost);
    const { user } = useCurrentUser();

    if (!user) return <Navigate to={ROUTES.ROOT} replace />
    if (user && !user.isCreator && !user.isAdmin) return <Navigate to={ROUTES.ROOT} replace />
    if (user && user.isCreator || user && user.isAdmin) return (
        <Box>
            <PageHeader title='add new post' subtitle='New post' />
            <PostForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title={'Add New Post'}
                errors={errors}
                data={data}
                onInputChange={handleChange}
            />
        </Box>
    )
}
