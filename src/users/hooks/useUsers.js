import { useCallback, useState } from "react";
import { useCurrentUser } from "../provider/UserProvider";
import { useSnack } from "../../providers/SnackBarProvider";
import { login } from "../services/userApiServices";
import { getUser, setTokenInLocalStorage } from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModule";

export default function useUsers() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const { setUser, setToken } = useCurrentUser();
    const setSnack = useSnack();
    const navigate = useNavigate();

    const handleLogin = useCallback(async (userData) => {
        setIsLoading(true);
        try {
            const token = await login(userData);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            setSnack('success', 'You Logged in succesfully');
            navigate(ROUTES.POSTS)
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        };
        setIsLoading(false);
    }, []);

    return {
        isLoading, error, handleLogin
    }
}