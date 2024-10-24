import { Box, Button, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom"
import ROUTES from "../routes/routesModule";

const Error = ({ errorMessage }) => {
    const navigate = useNavigate();
    return (
        <Container>
            <Box>
                <Paper sx={{ p: '10px', m: '10px' }}>{errorMessage}</Paper>
                <Button onClick={() => navigate(ROUTES.ROOT)} variant='contained'>Return to main page</Button>
            </Box>
        </Container>)
}

export default Error