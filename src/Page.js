import React from 'react';
// import { connect } from 'react-redux';
import ProductList from './ProductList';
import SearchForm from './SearchForm';
import { Container } from 'reactstrap';

const Page = (props) => {
    return (
        <Container>
            <SearchForm />
            <ProductList />
        </Container>
    )
}

export default Page;