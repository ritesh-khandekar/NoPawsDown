const donateReducer = (state= { data:null}, action) => {
    switch (action.type) {
        case 'DONATE':
            localStorage.setItem('Donation', JSON.stringify({ ...action?.data}))
            return { ...state, data: action?.data }
        default:
            return state;
    }
}

export default donateReducer