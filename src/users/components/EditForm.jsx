import { Box } from '@mui/material'
import React from 'react'
import Form from '../../forms/components/Form'
import Input from '../../forms/components/Input'

export default function EditForm({
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
                    name='first'
                    label='first name'
                    error={errors.fist}
                    onChange={onInputChange}
                    data={data}
                />
                <Input
                    name='middle'
                    label='middle name'
                    error={errors.fist}
                    onChange={onInputChange}
                    data={data}
                    required={false}
                />
                <Input
                    name='last'
                    label='last name'
                    error={errors.fist}
                    onChange={onInputChange}
                    data={data}
                />
                <Input
                    name='imageUrl'
                    label='image url'
                    error={errors.fist}
                    onChange={onInputChange}
                    data={data}
                    required={false}
                />
                <Input
                    name='imageAlt'
                    label='image alt'
                    error={errors.fist}
                    onChange={onInputChange}
                    data={data}
                    required={false}
                />
            </Form>
        </Box>
    )
}