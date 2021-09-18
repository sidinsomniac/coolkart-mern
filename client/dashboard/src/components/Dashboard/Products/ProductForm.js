import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useInput } from "../../../services/custom-hooks";
import { parseDescription } from "./helper";

const ProductForm = ({ categories }) => {
    const productName = useInput("text", "", "Enter Product Name");
    const productPrice = useInput("number", 0, "Enter Product Price");
    const productQuantity = useInput("number", 0, "Enter Product Quantity");
    const productDescription = useInput("text", "", "Enter Product Description");
    const [productCategory, setProductCategory] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const addProduct = e => {
        e.preventDefault();
        console.log({
            name: productName.value,
            price: +productPrice.value,
            quantity: +productQuantity.value,
            category: productCategory,
            productPhoto: selectedFile,
            description: parseDescription(productDescription.value)
        });
    };

    return (
        <Form onSubmit={addProduct}>
            <Form.Group className="my-1" controlId="formBasicCategoryName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control {...productName} resetval="" />
            </Form.Group>
            <Form.Group className="my-1" controlId="formBasicCategoryPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control {...productPrice} resetval="" />
            </Form.Group>
            <Form.Group className="my-1" controlId="formBasicCategoryQuantity">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control {...productQuantity} resetval="" />
            </Form.Group>
            <Form.Group controlId="formFile" className="my-1">
                <Form.Label>Product Category</Form.Label>
                <Form.Select onChange={e => setProductCategory(e.target.value)}>
                    <option disabled value="">Select Category</option>
                    {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                </Form.Select>
            </Form.Group>
            <Form.Group controlId="formFile" className="my-1">
                <Form.Label>Upload Product Photo</Form.Label>
                <Form.Control type="file" onChange={e => setSelectedFile(e.target.files[0])} />
            </Form.Group>
            <Form.Group className="my-1" controlId="formBasicCategoryDescription">
                <Form.Label>Product Description</Form.Label>
                <Form.Control {...productDescription} maxLength="1000" resetval="" as="textarea" rows={3} />
            </Form.Group>
            <Button variant="success" type="submit">
                Add Product
            </Button>
        </Form>
    );
};

export default ProductForm;