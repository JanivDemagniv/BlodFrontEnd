import { Box } from "@mui/material"
import FormButton from "./FormButton";
import SendIcon from '@mui/icons-material/Send';

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

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-end' }}>
                <FormButton sx={{ width: { xs: '100px', md: '200px' } }}
                    node='Submit'
                    onClick={onSubmit}
                    disabled={!validateForm()}
                    size='large'
                    icon={<SendIcon />}
                />
            </Box>
        </Box>
    );
};

export default CommentForm;