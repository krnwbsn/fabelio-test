import axios from 'axios';

const API_URL = "http://www.mocky.io/v2/5c9105cb330000112b649af8";

export const getData = async ({ dispatch }) => {
    try {
        const response = await axios.get(`${API_URL}`);
        const data = response.data;
        data.forEach(item => {
            dispatch({
                type: 'ADD_POST',
                furniturestyles: {
                     
                },
                products: {

                }

            })
        })
    }
    catch (error) {
        console.log(error);
    }
}