import axios from "axios";
import useAxios from "../../hooks/useAxios";


const apiUrl = 'http://localhost:8181/posts/';

useAxios();

const getAllPosts = async () => {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    };
};

const getPost = async (id) => {
    try {
        const response = await axios.get(apiUrl + id);
        const data = response.data;
        return data
    } catch (error) {
        throw new Error(error.message);
    };
};

const submitNewPost = async (post) => {
    try {
        const response = await axios.post(apiUrl, post);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

const submitComment = async (comment) => {
    try {
        const response = await axios.put(apiUrl + 'comments', comment);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    };
};

const updatePost = async (newPost, postId) => {
    try {
        const response = await axios.put(apiUrl + postId, newPost);
        const data = response.data;
        return data
    } catch (error) {
        throw new Error(error.message);
    };
};

const updateComment = async (newComment, commentId) => {
    try {
        const response = await axios.put(apiUrl + 'comments' + '/' + commentId.toString(), newComment);
        const data = response.data;
        return data
    } catch (error) {
        throw new Error(error.message);
    };
};

const likePost = async (id) => {
    try {
        const response = await axios.patch(apiUrl + id, id);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message)
    };
};

const likeComment = async (id, postId) => {
    try {
        let post = { _id: postId }
        const response = await axios.patch(apiUrl + 'comments/' + id, post);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message)
    };
};

const deleteComment = async (id) => {
    try {
        const response = await axios.delete(apiUrl + 'comments/' + id);
        const data = response.data;
        return data
    } catch (error) {
        throw new Error(error.message);
    };
};

export { getAllPosts, getPost, submitComment, submitNewPost, updatePost, updateComment, likePost, likeComment, deleteComment };