import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import PostForm from '../component/PostForm'
import usePosts from '../hooks/usePosts'
import useForm from '../../forms/hooks/useForm'
import initialPost from '../helpers/initialForms/initialPost'
import postSchema from '../models/postSchema'
import mapPostToModel from '../helpers/normalize/mapPostToModel'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'

export default function EditPost() {
    const { id } = useParams();
    const { handleUpdatePost, handleGetPostById, postDetailsData, isLoading, error } = usePosts();
    const {
        data,
        setData,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit
    } = useForm(initialPost, postSchema, handleUpdatePost);

    useEffect(() => {
        if (postDetailsData) {
            setData(mapPostToModel(postDetailsData));
        } else {
            handleGetPostById(id)
        }
    }, [postDetailsData])

    if (isLoading) return <Spinner />
    if (errors) return <Error errorMessage={error} />
    if (data && data.length === 0) return <Typography>Something went wrong</Typography>
    if (data) return (
        <Box>
            <PageHeader title='Edit Post' />
            <PostForm
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                title={'Edit The Post'}
                errors={errors}
                data={data}
                onInputChange={handleChange}
            />
        </Box>
    )
}
