import { Avatar, Box, Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { rplacePic } from '../../helpers/replaceValues'
import { useCurrentUser } from '../../users/provider/UserProvider'
import usePosts from '../hooks/usePosts';
import useForm from '../../forms/hooks/useForm';
import initialComment from '../helpers/initialForms/initialComment';
import commentSchema from '../models/commentSchema';
import CommentFormComponent from './CommentFormComponent';

export default function CommentSectionComponent({ postId }) {
    const { user } = useCurrentUser();

    const { handleNewComment } = usePosts();

    const {
        data,
        setData,
        errors,
        handleChange,
        validateForm,
        onSubmit
    } = useForm(initialComment, commentSchema, handleNewComment);

    useEffect(() => {
        setData((perv) => ({ ...perv, post: postId }))
    }, [handleNewComment])

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1.5%' }}>
            <CommentFormComponent
                onSubmit={onSubmit}
                validateForm={validateForm}
                errors={errors}
                data={data}
                onInputChange={handleChange}
                user={user}
            />

            {/* <TextField multiline minRows='2' variant='filled' sx={{ flexGrow: '1 ', minWidth: '50%' }} /> */}
            {/* <Button sx={{ flexGrow: '1', minWidth: '50%' }}>Send</Button> */}
        </Box>
    )
}
