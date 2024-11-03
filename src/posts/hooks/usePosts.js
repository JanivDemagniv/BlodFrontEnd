import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackBarProvider";
import { deleteComment, deletePost, getAllPosts, getPost, likeComment, likePost, submitComment, submitNewPost, updateComment, updatePost } from "../services/postsApiServices";
import normlizePost from "../helpers/normalize/normalizePost";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModule";
import normalizeComment from "../helpers/normalize/normalizeComment";

export default function usePosts() {
    const [postsData, setPostsData] = useState([]);
    const [postDetailsData, setPostDetailsData] = useState();
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

    const handleNewComment = useCallback(async (comment, postId) => {
        setIsLoading(true);
        try {
            let newComment = await submitComment(comment);
            setSnack('success', 'Comment submit successfully');
            if (postDetailsData) {
                setPostDetailsData(prev => ({
                    ...prev,
                    comments: newComment
                }));
            }
            if (postsData) {
                setPostsData(prevPostsData =>
                    prevPostsData.map(post =>
                        post._id === postId
                            ? { ...post, comments: newComment }
                            : post
                    )
                )
            }
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        };
        setIsLoading(false)
    }, [postDetailsData, postsData, setPostDetailsData]);

    const handleUpdatePost = useCallback(async (post, postId) => {
        setIsLoading(true);
        try {
            let newPost = normlizePost(post);
            await updatePost(newPost, postId);
            setSnack('success', 'Post has been updated');
            navigate(ROUTES.POSTINFO + '/' + postId)
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        };
        setIsLoading(false);
    }, []);

    const handleUpdateComment = useCallback(async (newComment, comment) => {
        setIsLoading(true);
        try {
            let updatedCommets = await updateComment(normalizeComment(comment, newComment), comment._id);
            setSnack('success', 'Comment has been updated');
            if (postDetailsData) {
                setPostDetailsData(prev => ({
                    ...prev,
                    comments: updatedCommets
                }));
            }
            if (postsData) {
                setPostsData(prevPostsData =>
                    prevPostsData.map(post =>
                        post._id === comment.post
                            ? { ...post, comments: updatedCommets }
                            : post
                    )
                )
            }
        } catch (error) {
            setError(error.message);
            setSnack('error', error.message);
        };
        setIsLoading(false)
    }, []);

    const handlePostLike = useCallback(async (id) => {
        try {
            await likePost(id);
            setSnack('success', 'Like updated');
        } catch (error) {
            setError(error);
            setSnack('error', error.message);
        };
    }, []);

    const handleCommentLike = useCallback(async (id, postId) => {
        try {
            await likeComment(id, postId);
            setSnack('success', 'Like updated');
        } catch (error) {
            setError(error);
            setSnack('error', error.message);
        };
    }, []);

    const handleDeletePost = useCallback(async (id) => {
        setIsLoading(true);
        try {
            await deletePost(id);
            setSnack('success', 'Post has been deleted');
            setPostsData((prevPosts) => {
                return prevPosts.filter((post) => post._id !== id);
            });
        } catch (error) {
            setError(error);
            setSnack('error', error.message);
        };
        setIsLoading(false);
    }, [setPostsData, postsData])

    const handleDeleteComment = useCallback(async (commentId, postId) => {
        setIsLoading(true);
        try {
            await deleteComment(commentId, postId);
            setSnack('success', 'Comment has beeb deleted');
            if (postDetailsData) {
                setPostDetailsData(prev => {
                    const newComments = prev.comments.filter(comment => comment._id !== commentId);
                    return {
                        ...prev,
                        comments: newComments
                    };
                });
            }
            if (postsData) {
                setPostsData(prevPostsData =>
                    prevPostsData.map(post =>
                        post._id === postId
                            ? { ...post, comments: post.comments.filter(comment => comment._id !== commentId) }
                            : post
                    )
                );
            }
        } catch (error) {
            setError(error);
            setSnack('error', error.message)
        };
        setIsLoading(false);
    }, [postDetailsData, postsData, setPostDetailsData, setPostsData]);

    return { handleGetAllPosts, postsData, isLoading, error, handleGetPostById, postDetailsData, handleNewComment, handleCreatePost, handleUpdatePost, handleUpdateComment, handlePostLike, handleCommentLike, handleDeleteComment, handleDeletePost };
};