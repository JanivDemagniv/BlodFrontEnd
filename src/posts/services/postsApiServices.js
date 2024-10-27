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
        const response = await axios.get(apiUrl + '/' + id);
        const data = response.data;
        return data
    } catch (error) {
        throw new Error(error.message);
    };
};

const submitComment = async (comment) => {
    try {
        const response = await axios.put(apiUrl + 'comments', comment);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    };
};

export { getAllPosts, getPost, submitComment }