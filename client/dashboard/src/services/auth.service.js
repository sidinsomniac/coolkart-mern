import axios from "./axios";

const loginUser = async (user) => {
    const userResponse = await axios.post("/admin/login", { ...user });
    return userResponse;
};

const authService = {
    loginUser
};

export default authService;