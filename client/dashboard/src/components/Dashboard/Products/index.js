import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { getPeripheralCategories } from "./helper";
import ToggleForm from "../../ToggleForm";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import { getAllProducts } from "../../../actions/product.action";

const Products = () => {
    const [categories, productStore] = useSelector(state => {
        const categoryPeripherals = getPeripheralCategories(state.cat?.categories);
        const categoryList = categoryPeripherals.sort((a, b) => a.name.localeCompare(b.name));
        return [categoryList, state.prod];
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log({ categories, products: productStore });

    return (
        <>
            <h1>
                Products
            </h1>
            <Row>
                <Col md={7}>
                    <ProductTable productStore={productStore} />
                </Col>
                <Col md={5}>
                    <ToggleForm>
                        <ProductForm categories={categories} productStore={productStore} />
                    </ToggleForm>
                </Col>
            </Row>
        </>
    );
};

export default Products;