import React from 'react';
import { connect } from 'react-redux';
import { CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function ProductItem ({item, dispatch}) {
    return (
        <CardBody>
            <div className="title">
                <CardTitle><h4>{item.name}</h4></CardTitle>
                <CardSubtitle className="price">{item.price}</CardSubtitle>
            </div>
            <CardText>{item.description}</CardText>
            <CardSubtitle className="furniturestyles">{item.furniture.style}</CardSubtitle>
            <CardSubtitle className="deliverydays">{item.delivery_time}</CardSubtitle>
        </CardBody>

    )
}

export default connect()(ProductItem);