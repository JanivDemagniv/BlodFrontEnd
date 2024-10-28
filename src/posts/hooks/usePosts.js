import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackBarProvider";
import { getAllPosts, getPost, newPost, submitComment } from "../services/postsApiServices";
import normlizePost from "../helpers/normalize/normalizePost";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModule";

export default function usePosts() {
    const [postsData, setPostsData] = useState([]);
    const [postDetailsData, setPostDetailsData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const setSnack = useSnack();
    const navigate = useNavigate();

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

    const handleCreatePost = useCallback(async (post) => {
        setIsLoading(true);
        try {
            const addPost = normlizePost(post);
            const newPost = await newPost(addPost);
            setSnack('success', 'Post is created');
            navigate(ROUTES.POSTINFO + '/' + newPost._id);
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message)
        };
        setIsLoading(false)
    }, [])

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

    return { handleGetAllPosts, postsData, isLoading, error, handleGetPostById, postDetailsData, handleNewComment, handleCreatePost }
}