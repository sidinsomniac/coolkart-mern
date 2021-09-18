import React from "react";
import { Table } from "react-bootstrap";
import "./ProductTable.css";

const ProductTable = ({ productStore }) => {
    return (
        <div className="product-table">
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Created By</th>
                    </tr>
                </thead>
                <tbody>
                    {productStore.products.map(product => (
                        <tr key={product.id}>
                            <td title={product.name + "-" + product.description}>{product.name.substring(0, 30)}...</td>
                            <td>{product.category.name}</td>
                            <td>{product.createdBy.username}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductTable;