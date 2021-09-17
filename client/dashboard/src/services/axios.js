import axios from "axios";
import { baseURL } from "./urlConfig";

const token = window.localStorage.getItem("userToken");

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export default axiosInstance;