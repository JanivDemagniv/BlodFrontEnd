import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackBarProvider";
import { getAllPosts, getPost, submitComment, submitNewPost, updatePost } from "../services/postsApiServices";
import normlizePost from "../helpers/normalize/normalizePost";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModule";
import mapPostToModel from "../helpers/normalize/mapPostToModel";

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
            const newPost = await submitNewPost(addPost);
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
    }, []);

    const handleUpdatePost = useCallback(async (post, postId) => {
        setIsLoading(true);
        try {
            let newPost = mapPostToModel(post);
            await updatePost(newPost, postId);
            setSnack('success', 'Post have been updated');
            navigate(ROUTES.POSTINFO + '/' + postId)
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        };
        setIsLoading(false);
    }, [])

    return { handleGetAllPosts, postsData, isLoading, error, handleGetPostById, postDetailsData, handleNewComment, handleCreatePost, handleUpdatePost };
};