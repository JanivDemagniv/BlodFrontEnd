import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useCurrentUser } from '../../../users/provider/UserProvider'
import useForm from '../../../forms/hooks/useForm';
import initialComment from '../../helpers/initialForms/initialComment';
import commentSchema from '../../models/commentSchema';
import CommentFormComponent from './CommentFormComponent';

export default function CommentSectionComponent({ postId, handleNewComment }) {
    const { user } = useCurrentUser();

    const {
        data,
        setData,
        errors,
        handleChange,
        validateForm,
        onSubmit
    } = useForm(initialComment, commentSchema, (data) => { handleNewComment(data, postId) });

    useEffect(() => {
        setData((perv) => ({ ...perv, post: postId }))
    }, [])

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
        </Box>
    )
}
