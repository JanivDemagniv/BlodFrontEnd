import { Box } from "@mui/material"
import FormButton from "./FormButton";

const CommentForm = ({
    onSubmit,
    validateForm,
    color = 'inherit',
    spacing = 1,
    styles = {},
    children
}) => {
    return (
        <Box
            component='form'
            color={color}
            sx={{ width: '100%', ...styles }}
            onSubmit={onSubmit}
            autoComplete='off'
            noValidate
        >

            <Box spacing={spacing}>
                {children}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Box>
                    <FormButton
                        node='Submit'
                        onClick={onSubmit}
                        disabled={!validateForm()}
                        size='large'
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default CommentForm;