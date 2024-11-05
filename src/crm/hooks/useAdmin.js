import { useCallback, useState } from "react"
import { useSnack } from "../../providers/SnackBarProvider";
import { deleteUser, getAllUsers, updateUserStatus } from "../services/mangementApiServices";
import { normalizeUserToCrm } from "../helpers/normalizeUsers";

export default function useAdmin() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [allUsers, setAllUsers] = useState();
    const setSnack = useSnack();

    const handleGetAllUsers = useCallback(async () => {
        setIsLoading(true);
        try {
            const users = await getAllUsers();
            const allUsers = users.map((user) => normalizeUserToCrm(user));
            setAllUsers(allUsers);
            setSnack('success', 'All users loaded');
        } catch (error) {
            setError(error);
            setSnack('error', error.message)
        }
        setIsLoading(false)
    }, []);

    const handleUpdateStatus = useCallback(async (userId) => {
        setIsLoading(true);
        try {
            await updateUserStatus(userId);
            setAllUsers(
                (perv) => {
                    perv.forEach((user) => {
                        if (user.id === userId) {
                            user.isCreator = !user.isCreator;
                            return user
                        }
                    });
                    return perv
                });
            setSnack('success', 'User status has been updated');
        } catch (error) {
            setError(error);
            setSnack('error', error.message)
        }
        setIsLoading(false)
    }, []);

    const handleDeleteUser = useCallback(async (userId) => {
        setIsLoading(true);
        try {
            await deleteUser(userId);
            setAllUsers((perv) => {
                perv.filter((user) => { user._id === userId });
            });
            setSnack('success', 'User has been deleted')
        } catch (error) {
            setError(error);
            setSnack('error', error.message)
        };
        setIsLoading(false);
    }, []);


    return { handleGetAllUsers, handleUpdateStatus, handleDeleteUser, error, isLoading, allUsers }
}