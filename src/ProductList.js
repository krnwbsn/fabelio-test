import React from 'react';
// import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { Col, Card } from 'reactstrap';

const ProductList = (props) => {
    return (
        <Col sm="6">
            <Card className="productcard">
                <ProductItem />
            </Card>
        </Col>
    )
}

export default ProductList;