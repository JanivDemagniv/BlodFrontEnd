import axios from "axios";

const apiUrl = "http://localhost:8181/users";

const login = async (userLogin) => {
    try {
        let response = await axios.post(apiUrl + '/login', userLogin);
        let data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    };
};

const signup = async (userSignup) => {
    try {
        const response = await axios.post(apiUrl, userSignup);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    };
};

const getUserById = async (userId) => {
    try {
        const response = await axios.get(apiUrl + '/' + userId);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    };
};

export { login, signup, getUserById }