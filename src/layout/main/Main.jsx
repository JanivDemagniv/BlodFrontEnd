import { Container } from '@mui/material'
import React from 'react'

export default function Main({ children }) {
    return (
        <Container sx={{ minHeight: '50vh' }}>
            {children}
        </Container>
    )
}
