import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackBarProvider";
import { getAllPosts, getPost } from "../services/postsApiServices";

export default function usePosts() {
    const [postsData, setPostsData] = useState([]);
    const [postDetailsData, setPostDetailsData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const setSnack = useSnack();

    const handleGetAllPosts = useCallback(async () => {
        try {
            setIsLoading(true);
            let response = await getAllPosts();
            setPostsData(response);
            setSnack('success', 'All posts been loaded');
        } catch (error) {
            setError(error.message);
            setSnack('error', 'requeset failed');
        }
        setIsLoading(false)
    }, []);

    const handleGetPostById = useCallback(async (id) => {
        try {
            setIsLoading(true);
            const response = await getPost(id);
            setPostDetailsData(response);
            setSnack('success', 'Post Has Been Loaded');
        } catch (error) {
            setError(error.message);
            setSnack('error', 'Request Failed');
        };
        setIsLoading(false)
    }, [])

    return { handleGetAllPosts, postsData, isLoading, error, handleGetPostById, postDetailsData }
}