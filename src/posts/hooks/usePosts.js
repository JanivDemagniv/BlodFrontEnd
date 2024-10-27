import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackBarProvider";
import { getAllPosts, getPost, submitComment } from "../services/postsApiServices";

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
        setIsLoading(false);
    }, []);

    const handleGetPostById = useCallback(async (id) => {
        setIsLoading(true);
        try {
            const response = await getPost(id);
            setPostDetailsData(response);
            setSnack('success', 'Post Has Been Loaded');
        } catch (error) {
            setError(error.message);
            setSnack('error', 'Request Failed');
        };
        setIsLoading(false);
    }, []);

    const handleNewComment = useCallback(async (comment) => {
        setIsLoading(true);
        try {
            await submitComment(comment);
            setSnack('success', 'Comment submit successfully')
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        };
        setIsLoading(false)
    }, [])

    return { handleGetAllPosts, postsData, isLoading, error, handleGetPostById, postDetailsData, handleNewComment }
}