import { useCallback, useState } from "react";
import { useCurrentUser } from "../provider/UserProvider";
import { useSnack } from "../../providers/SnackBarProvider";
import { editUser, getUserById, login, signup } from "../services/userApiServices";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModule";
import normalizeUser from "../helpers/normlization/normalizeUser";
import mapUserToModel from "../helpers/normlization/mapUserToModel";

export default function useUsers() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [userDeatails, setUserDetails] = useState();
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

    const handleLogout = useCallback(() => {
        removeToken();
        setUser(null);
        navigate(ROUTES.ROOT);
        setSnack('success', 'You logout successfully');
    }, []);

    const handleSignup = useCallback(async (userSignup) => {
        setIsLoading(true);
        try {
            const signupNormlize = normalizeUser(userSignup);
            await signup(signupNormlize);
            await handleLogin({ email: userSignup.email, password: userSignup.password });
            setSnack('success', 'Welcome to our family')
        } catch (error) {
            setError(error.message);
            setSnack('error', 'Something went wrong');
        };
        setIsLoading(false);
    }, []);

    const handleGetUserById = useCallback(async (userId) => {
        setIsLoading(true)
        try {
            const user = await getUserById(userId);
            setUserDetails(user);
            setSnack('success', 'User deatails been loaded')
        } catch (error) {
            setError(error);
            setSnack('error', error.message);
        }
        setIsLoading(false);
    }, []);

    const handleUpdateUser = useCallback(async (userId, UserUpdated) => {
        setIsLoading(true)
        try {
            const userUpdatedModeled = mapUserToModel(UserUpdated);
            const newUserInfo = await editUser(userId, userUpdatedModeled);
            setUserDetails(newUserInfo);
            setSnack('success', 'Your details has been updated');
            navigate(ROUTES.MYPROFILE);
        } catch (error) {
            setError(error);
            setSnack('error', error.message)
        }
        setIsLoading(false)
    }, [])

    return {
        isLoading, error, handleLogin, handleLogout, handleSignup, handleGetUserById, userDeatails, handleUpdateUser
    }
}