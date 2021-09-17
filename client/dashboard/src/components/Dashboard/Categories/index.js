import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "../../../actions/category.action";
import { renderCategoryList } from "./helper";

const Categories = () => {

    const dispatch = useDispatch();
    const categoryStore = useSelector(state => state.cat);
    const categoryNestedList = renderCategoryList(categoryStore.categories);

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
        </>
    );
};

export default Categories;