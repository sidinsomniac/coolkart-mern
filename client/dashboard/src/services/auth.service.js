import axios from "./axios";

const loginUser = async user => {
    const adminResponse = await axios.post("/admin/login", { ...user });
    return adminResponse;
};

const registerUser = async user => {
    const newAdminResponse = await axios.post("/admin/register", { ...user });
    return newAdminResponse;
};

const logoutUser = async user => {
    const logoutResponse = await axios.post("/admin/logout");
    return logoutResponse;
};

const authService = {
    loginUser,
    registerUser,
    logoutUser
};

export default authService;