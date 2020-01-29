import React from 'react';
// import {connect} from 'react-redux';
import { Form, FormGroup, Input } from 'reactstrap';

const SearchFurniture = (props) => {
    return (
        <Form>
            <FormGroup row>
                    <Input className="searchbox" type="search" name="search" id="SearchFurniture" placeholder="Search Furniture" />
            </FormGroup>
        </Form>
    )
}

export default SearchFurniture;