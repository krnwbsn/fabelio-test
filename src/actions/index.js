import axios from 'axios';
const API_URL = 'http://www.mocky.io/v2/5c9105cb330000112b649af8';

const request = axios.create({
    baseURL: API_URL,
    timout: 1000
})

export const loadDataSuccess = (data) => ({
    type: 'LOAD_DATA_SUCCESS',
    data
})

export const loadDataFailure = () => ({
    type: 'LOAD_DATA_FAILURE'
})

export const getData = ({ dispatch }) => request.get(API_URL)
.then(response => dispatch(loadDataSuccess(response.data)))
.catch(error => {
    console.log(error);
    dispatch(loadDataFailure());
});