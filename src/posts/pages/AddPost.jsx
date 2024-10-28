import React from 'react'
import usePosts from '../hooks/usePosts'
import useForm from '../../forms/hooks/useForm';
import initialPost from '../helpers/initialForms/initialPost';
import postSchema from '../models/postSchema';
import { Box } from '@mui/material';
import PostForm from '../component/PostForm';
import PageHeader from '../../components/PageHeader';

export default function AddPost() {
    const { handleCreatePost } = usePosts();
    const {
        data,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit
    } = useForm(initialPost, postSchema, handleCreatePost)
    return (
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
