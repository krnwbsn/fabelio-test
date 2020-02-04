export const reducer = (state = [], action) => {
    switch (action.type){
        case 'LOAD':
            return action.data.map((item, index) => {
                const {
                    furniture_styles,
                    name,
                    description,
                    delivery_time,
                    price,
                } = item;

                return {
                    furniture_styles,
                    name,
                    description,
                    delivery_time,
                    price,
                    index: index+1,
                    sent: true
                }
            })
        default:
            return state;
    }
}