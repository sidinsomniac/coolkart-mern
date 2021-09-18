import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Badge, Spinner } from "react-bootstrap";
import { useInput } from "../../../services/custom-hooks";
import { addNewCategory, getAllCategories } from "../../../actions/category.action";

const CategoryForm = ({ parentCategory, setShow }) => {
    const dispatch = useDispatch();
    const categoryStore = useSelector(state => state.cat);
    const categoryName = useInput("text", "", "Enter New Category Name");
    const [selectedFile, setSelectedFile] = useState(null);
    const [isChildCategory, setIsChildCategory] = useState(true);

    const addCategory = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", categoryName.value);

        if (isChildCategory && parentCategory.id) {
            formData.append("parentId", parentCategory.id);
        }
        if (selectedFile?.name) {
            formData.append("categoryImage", selectedFile);
        }
        await dispatch(addNewCategory(formData));
        setShow(false);
        await dispatch(getAllCategories());
    };

    const selectFile = e => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <Form onSubmit={addCategory}>
            <h6>Parent Category:
                {
                    isChildCategory ? <Badge bg="secondary">{parentCategory.name + " "}
                        <span style={{ cursor: "pointer" }} onClick={() => setIsChildCategory(false)}>&#10005;</span>
                    </Badge> :
                        <small> none</small>
                }
            </h6>
            {categoryStore.loading ? (
                <Spinner className="loader" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            )
                : (
                    <>
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
                    </>
                )}
        </Form>
    );
};

export default CategoryForm;;