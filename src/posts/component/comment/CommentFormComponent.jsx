import React from 'react'
import CommentForm from '../../../forms/components/CommentForm'
import CommentInput from '../../../forms/components/CommentInput'

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
