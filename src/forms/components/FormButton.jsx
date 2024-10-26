import { Button } from '@mui/material'
import React from 'react'

const FormButton = ({
    variant = 'contained',
    component = 'button',
    size = 'medium',
    color = 'primary',
    onClick,
    disabled = false,
    node
}) => {
    return (
        <Button
            variant={variant}
            component={component}
            size={size}
            color={color}
            onClick={onClick}
            disabled={disabled}
            fullWidth
        >
            {node}
        </Button>
    );
};

export default FormButton;
