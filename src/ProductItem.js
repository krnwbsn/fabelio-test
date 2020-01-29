import React from 'react';
// import { connect } from 'react-redux';
import { CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const ProductItem = (props) => {
    return (
        <CardBody>
            <div className="title">
                <CardTitle><h4>Product Name</h4></CardTitle>
                <CardSubtitle className="price">Price</CardSubtitle>
            </div>
            <CardText>You can specify some description text in here.</CardText>
            <CardSubtitle className="furniturestyles">Furniture Styles</CardSubtitle>
            <CardSubtitle className="deliverydays">Delivery Days</CardSubtitle>
        </CardBody>

    )
}

export default ProductItem;