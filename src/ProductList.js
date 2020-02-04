import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import ProductItem from './ProductItem';
import { Col, Card } from 'reactstrap';
import { getData } from './actions';

function ProductList({ dispatch,  ...props}) {
    useEffect(() => {
        getData({ dispatch });
    }, []);

    return (
        <Col sm="6">
            <Card className="productcard">
                {/* {data && data.map((item, index) => (
                    <ProductItem item={item} />
                ))} */}
            </Card>
        </Col>
    )
}

export default connect()(ProductList);
