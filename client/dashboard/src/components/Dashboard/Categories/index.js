import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import "./Categories.css";
import { getAllCategories } from "../../../actions/category.action";
import { renderCategoryList } from "./helper";
import DashboardModal from "../../DashboardModal";
import CategoryForm from "./CategoryForm";

const Categories = () => {

    const [show, setShow] = useState(false);
    const [categoryParent, setCategoryParent] = useState("");
    const dispatch = useDispatch();
    const categoryStore = useSelector(state => state.cat);

    const openCategoryForm = (category) => {
        setShow(true);
        setCategoryParent(category);
    };

    const categoryNestedList = renderCategoryList(categoryStore.categories, openCategoryForm);


    useEffect(() => {
        dispatch(getAllCategories());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h1>
                Categories
            </h1>
            {categoryNestedList}
            <DashboardModal show={show} setShow={setShow} heading="Add New Category">
                <CategoryForm parentCategory={categoryParent} setShow={setShow} />
            </DashboardModal>

        </>
    );
};

export default Categories;