import { Button } from '@mui/material'
import React from 'react';

const FormButton = ({
    variant = 'contained',
    component = 'button',
    size = 'medium',
    color = 'primary',
    onClick,
    disabled = false,
    sx,
    icon,
    node
}) => {
    return (
        <Button
            startIcon={icon}
            variant={variant}
            component={component}
            size={size}
            color={color}
            onClick={onClick}
            disabled={disabled}
            sx={{ m: '5px', ...sx }}
            fullWidth
        >
            {node}
        </Button>
    );
};

export default FormButton;
