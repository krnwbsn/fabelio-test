import React from 'react';
// import { connect } from 'react-redux';
import FurnitureStyle from './FurnitureStyle';
import DeliveryTime from './DeliveryTime';
import SearchFurniture from './SearchFurniture'
import { Container, Col, Row } from 'reactstrap';

const SearchForm = (props) => {
    return (
        <Container className="bodysearch">
                <Row>
                    <Col sm="6">
                        <SearchFurniture />
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <FurnitureStyle />
                    </Col>
                    <Col sm="6">
                        <DeliveryTime />
                    </Col>
                </Row>
        </Container>
    )
}

export default SearchForm;