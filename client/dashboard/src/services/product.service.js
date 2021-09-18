import axios from "./axios";

const fetchProducts = async user => {
    const products = await axios.get("/product");
    return products;
};

const addProduct = async product => {
    const newproductResponse = await axios.post("/product", product);
    return newproductResponse;
};

const productServices = {
    fetchProducts,
    addProduct
};

export default productServices;