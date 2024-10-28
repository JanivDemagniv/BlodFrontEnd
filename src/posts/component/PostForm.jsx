import { Box } from '@mui/material'
import React from 'react'
import Form from '../../forms/components/Form'
import Input from '../../forms/components/Input'

export default function PostForm({
    onSubmit,
    onReset,
    validateForm,
    title,
    errors,
    data,
    onInputChange
}) {
    return (
        <Box>
            <Form
                onSubmit={onSubmit}
                onReset={onReset}
                validateForm={validateForm}
                title={title}
            >
                <Input
                    name='title'
                    label='title'
                    error={errors.title}
                    onChange={onInputChange}
                    data={data}
                    required
                />
                <Input
                    name='subtitle'
                    label='subtitle'
                    error={errors.subtitle}
                    onChange={onInputChange}
                    data={data}
                    required
                />
                <Input
                    name='artist'
                    label='artist'
                    error={errors.artist}
                    onChange={onInputChange}
                    data={data}
                    required
                />
                <Input
                    name='album'
                    label='album'
                    error={errors.album}
                    onChange={onInputChange}
                    data={data}
                    required
                />
                <Input
                    name='content'
                    label='content'
                    error={errors.content}
                    onChange={onInputChange}
                    data={data}
                    required
                />
                <Input
                    name='imageUrl'
                    label='imageUrl'
                    error={errors.imageUrl}
                    onChange={onInputChange}
                    data={data}
                    required
                />
                <Input
                    name='imageAlt'
                    label='imageAlt'
                    error={errors.imageUrl}
                    onChange={onInputChange}
                    data={data}
                    required
                />
            </Form>
        </Box>
    )
}
