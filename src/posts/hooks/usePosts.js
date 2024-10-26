import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackBarProvider";
import { getAllPosts } from "../services/postsApiServices";

export default function usePosts() {
    const [postsData, setPostsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const setSnack = useSnack();

    const handleGetAllPosts = useCallback(async () => {
        try {
            setIsLoading(true)
            let response = await getAllPosts();
            setPostsData(response);
            setSnack('success', 'All posts been loaded')
        } catch (error) {
            setError(error.message)
            setSnack('error', 'requeset failed')
        }
        setIsLoading(false)
    }, [])
    return { handleGetAllPosts, postsData, isLoading, error }
}