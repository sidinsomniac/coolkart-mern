import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewProduct, getAllProducts } from "../../../actions/product.action";

import { useInput } from "../../../services/custom-hooks";
import { parseDescription } from "./helper";

const ProductForm = ({ categories, productStore }) => {
    const dispatch = useDispatch();
    const productName = useInput("text", "", "Enter Product Name");
    const productPrice = useInput("number", 0, "Enter Product Price");
    const productQuantity = useInput("number", 0, "Enter Product Quantity");
    const productDescription = useInput("text", "", "Enter Product Description");
    const [productCategory, setProductCategory] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const addProduct = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", productName.value,);
        formData.append("category", productCategory,);
        formData.append("price", +productPrice.value,);
        formData.append("quantity", +productQuantity.value,);
        formData.append("description", parseDescription(productDescription.value));
        if (selectedFile?.name) {
            formData.append("productPhoto", selectedFile);
        }
        await dispatch(addNewProduct(formData));
        resetProductFields();
        await dispatch(getAllProducts());
    };

    const resetProductFields = () => {
        productName.resetval();
        setProductCategory("");
        setSelectedFile(null);
        productPrice.resetval();
        productQuantity.resetval();
        productDescription.resetval();
    };

    return (
        <Form onSubmit={addProduct}>

            {productStore.loading ? (
                <Spinner className="loader" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>) : (
                <>
                    <Form.Group className="my-1" controlId="formBasicCategoryName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control isInvalid={productStore.errorMessages?.name} {...productName} resetval="" />
                        {productStore.errorMessages?.name && (
                            <Form.Text className="text-danger">
                                {productStore.errorMessages?.name}
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group className="my-1" controlId="formBasicCategoryPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control isInvalid={productStore.errorMessages?.price} {...productPrice} resetval="" />
                        {productStore.errorMessages?.price && (
                            <Form.Text className="text-danger">
                                {productStore.errorMessages?.price}
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group className="my-1" controlId="formBasicCategoryQuantity">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control isInvalid={productStore.errorMessages?.quantity} {...productQuantity} resetval="" />
                        {productStore.errorMessages?.quantity && (
                            <Form.Text className="text-danger">
                                {productStore.errorMessages?.quantity}
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group controlId="formCategory" className="my-1">
                        <Form.Label>Product Category</Form.Label>
                        <Form.Select isInvalid={productStore.errorMessages?.category} onChange={e => setProductCategory(e.target.value)}>
                            <option disabled value="">Select Category</option>
                            {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                        </Form.Select>
                        {productStore.errorMessages?.category && (
                            <Form.Text className="text-danger">
                                {productStore.errorMessages?.category}
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group controlId="formFile" className="my-1">
                        <Form.Label>Upload Product Photo</Form.Label>
                        <Form.Control type="file" onChange={e => setSelectedFile(e.target.files[0])} />
                    </Form.Group>
                    <Form.Group className="mt-1 mb-3" controlId="formBasicCategoryDescription">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control isInvalid={productStore.errorMessages?.description} {...productDescription} maxLength="1000" resetval="" as="textarea" rows={3} />
                        {productStore.errorMessages?.description && (
                            <Form.Text className="text-danger">
                                {productStore.errorMessages?.description}
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Add
                    </Button>
                </>
            )}

        </Form>
    );
};

export default ProductForm;