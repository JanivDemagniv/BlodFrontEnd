import axios from "axios";


export const apiUrl = 'http://localhost:8181/posts/';

export const getAllPosts = async () => {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    };
};

export const getPost = async (id) => {
    try {
        const response = await axios.get(apiUrl + '/' + id);
        const data = response.data;
        return data
    } catch (error) {
        throw new Error(error.message);
    };
};