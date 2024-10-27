import React from 'react'
import Input from '../../forms/components/Input'
import CommentForm from '../../forms/components/CommentForm'
import CommentInput from '../../forms/components/CommentInput'
import { Avatar } from '@mui/material'
import { rplacePic } from '../../helpers/replaceValues'

export default function CommentFormComponent({
    onSubmit,
    validateForm,
    data,
    onInputChange,
    user
}) {
    return (
        <CommentForm
            onSubmit={onSubmit}
            validateForm={validateForm}
        >

            <CommentInput
                user={user}
                name='content'
                onChange={onInputChange}
                data={data}
            />
        </CommentForm>
    )
}
