import React from 'react';
// import { connect } from 'react-redux';
import Select from 'react-select';
import { colourOptions } from './data';

const FurnitureStyle = (props) => {
    return (
        <Select
            defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
            name="colors"
            options={colourOptions}
            className="basic-multi-select"
            classNamePrefix="select"
        />
    )
}
export default FurnitureStyle;