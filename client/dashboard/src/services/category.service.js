import axios from "./axios";

const fetchCategories = async () => {
    const categories = await axios.get("/category");
    return categories;
};

const addCategory = async category => {
    const newCategoryResponse = await axios.post("/category", category);
    return newCategoryResponse;
};

const categoryServices = {
    fetchCategories,
    addCategory
};

export default categoryServices;