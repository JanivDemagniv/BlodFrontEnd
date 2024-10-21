import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarLink({ to, sx, children }) {
    return (
        <Link style={{
            textDecoration: 'none',
            color: '#fff',
            alignSelf: 'center',
            ...sx
        }} to={to}> {children}</Link >
    )
}
