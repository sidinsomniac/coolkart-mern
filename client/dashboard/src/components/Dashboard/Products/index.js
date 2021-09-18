import React from 'react';
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { getPeripheralCategories } from "./helper";
import ToggleForm from "../../ToggleForm";
import ProductForm from "./ProductForm";

const Products = () => {
    const [categories, productStore] = useSelector(state => {
        const categoryPeripherals = getPeripheralCategories(state.cat?.categories);
        const categoryList = categoryPeripherals.sort((a, b) => a.name.localeCompare(b.name));
        return [categoryList, state.prod];
    });

    console.log({ categories, products: productStore });

    return (
        <>
            <h1>
                Products
            </h1>
            <Row>
                <Col md={7}>
                    Product Display
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