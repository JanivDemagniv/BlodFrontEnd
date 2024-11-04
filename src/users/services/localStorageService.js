import { jwtDecode } from "jwt-decode"

const TOKEN = 'user webtoken';

const setTokenInLocalStorage = (token) => {
    localStorage.setItem(TOKEN, token);
};

const removeToken = () => localStorage.removeItem(TOKEN);

const getToken = () => localStorage.getItem(TOKEN);

const getUser = () => {
    try {
        const userToken = getToken();
        return jwtDecode(userToken);
    } catch (error) {
        return null
    }
}

export { TOKEN, removeToken, setTokenInLocalStorage, getToken, getUser }