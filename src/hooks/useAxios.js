import axios from "axios";
import { getToken } from "../users/services/localStorageService";

export default function useAxios() {
    axios.defaults.headers.common["JRY-auth-token"] = getToken();
}