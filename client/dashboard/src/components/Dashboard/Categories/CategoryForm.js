import React, { useState } from "react";
import { Form, Button, Badge } from "react-bootstrap";
import { useInput } from "../../../services/custom-hooks";

const CategoryForm = ({ parentCategory, setShow }) => {
    const categoryName = useInput("text", "", "Enter New Category Name");
    const [selectedFile, setSelectedFile] = useState(null);

    const addNewCategory = e => {
        e.preventDefault();
        console.log({ categoryImage: selectedFile, name: categoryName.value, parentId: parentCategory.id });
        setShow(false);
    };

    const selectFile = e => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <Form onSubmit={addNewCategory}>
            <h6>Parent Category: <Badge bg="secondary">{parentCategory.name}</Badge></h6>
            <Form.Group className="mb-3" controlId="formBasicCategoryName">
                <Form.Label>Category Name</Form.Label>
                <Form.Control {...categoryName} resetval="" />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Category Image</Form.Label>
                <Form.Control type="file" onChange={selectFile} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Category
            </Button>
        </Form>
    );
};

export default CategoryForm;;