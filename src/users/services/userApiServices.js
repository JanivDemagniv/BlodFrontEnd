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

export { login }