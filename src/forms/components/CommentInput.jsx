import { Avatar, Box, TextField } from "@mui/material"
import { rplacePic } from "../../helpers/replaceValues";

const CommentInput = ({
    variant = 'outlined',
    type = 'text',
    name,
    data,
    label,
    required = true,
    onChange,
    user
}) => {
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Avatar sx={{ alignSelf: 'center' }} src={user ? user.profilePic.url : rplacePic.url} alt={user ? user.profilePic.alt : rplacePic.url} />
            <TextField
                variant={variant}
                label={label}
                type={type}
                id={name}
                name={name}
                value={data[name] ? data[name] : ""}
                required={required}
                onChange={onChange}
                sx={{
                    flexGrow: '1 ', minWidth: '80%', m: '5px'
                }}
                fullWidth
                autoComplete='off'
                multiline minRows='2'
            />
        </Box>
    );
};

export default CommentInput;

