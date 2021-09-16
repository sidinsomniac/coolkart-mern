import axios from "./axios";

const loginUser = async user => {
    const adminResponse = await axios.post("/admin/login", { ...user });
    return adminResponse;
};

const registerUser = async user => {
    const newAdminResponse = await axios.post("/admin/register", { ...user });
    return newAdminResponse;
};

const authService = {
    loginUser,
    registerUser
};

export default authService;