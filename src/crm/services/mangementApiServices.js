import axios from "axios";
import useAxios from "../../hooks/useAxios";

const apiUrl = "http://localhost:8181/users";
useAxios();

const updateUserStatus = async (id) => {
    try {
        const response = await axios.patch(apiUrl + '/' + id);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(e.message);
    };
};

const getAllUsers = async () => {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    };
};

const deleteUser = async (id) => {
    try {
        const response = await axios.delete(apiUrl + '/' + id)
        const data = response.data;
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export { updateUserStatus, getAllUsers, deleteUser };