import { Box } from '@mui/material'
import React from 'react'
import Form from '../../forms/components/Form'
import Input from '../../forms/components/Input'

export default function SignupForm({
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
                    name='username'
                    label='username'
                    error={errors.fist}
                    onChange={onInputChange}
                    data={data}
                />
                <Input
                    name='email'
                    label='email'
                    type='email'
                    error={errors.fist}
                    onChange={onInputChange}
                    data={data}
                />
                <Input
                    name='password'
                    label='password'
                    type='password'
                    error={errors.fist}
                    onChange={onInputChange}
                    data={data}
                />
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
                    name='url'
                    label='image url'
                    error={errors.fist}
                    onChange={onInputChange}
                    data={data}
                />
                <Input
                    name='alt'
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
