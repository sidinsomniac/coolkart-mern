import axios from "axios";
import { baseURL } from "./urlConfig";

export const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Authorization": ""
    }
});

export default axiosInstance;