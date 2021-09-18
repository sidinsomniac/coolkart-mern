import React, { useState } from 'react';
import { useSelector } from "react-redux";

import "./Categories.css";
import { renderCategoryList } from "./helper";
import DashboardModal from "../../DashboardModal";
import CategoryForm from "./CategoryForm";
import Snackbar from "../../Snackbar";

const Categories = () => {

    const [show, setShow] = useState(false);
    const [categoryParent, setCategoryParent] = useState("");
    const categoryStore = useSelector(state => state.cat);

    const openCategoryForm = (category) => {
        setShow(true);
        setCategoryParent(category);
    };

    const categoryNestedList = renderCategoryList(categoryStore.categories, openCategoryForm);

    return (
        <>
            <h1>
                Categories
            </h1>
            {categoryNestedList}
            <DashboardModal show={show} setShow={setShow} heading="Add New Category">
                <CategoryForm parentCategory={categoryParent} setShow={setShow} />
            </DashboardModal>
            {categoryStore.errorMessages?.message && <Snackbar errorMessage={categoryStore.errorMessages?.message} />}

        </>
    );
};

export default Categories;