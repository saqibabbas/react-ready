const initialState = {
    list: [
        {
            amount: 866.99,
            date: '16 Mar, 2019',
            id: 1,
            name: 'Paul McCartney',
            paymentMethod: 'VISA ⠀•••• 2574',
            shipTo: 'London, UK',
        },
        {
            amount: 866.99,
            date: '16 Mar, 2019',
            id: 2,
            name: 'Paul McCartney',
            paymentMethod: 'VISA ⠀•••• 2574',
            shipTo: 'London, UK',
        },
    ],
};

export default function customerReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
