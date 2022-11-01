const adoptReducer = (state= { data:null}, action) => {
    switch (action.type) {
        case 'ADOPT':
            localStorage.setItem('Adopted', JSON.stringify({ ...action?.data}))
            return { ...state, data: action?.data }
        default:
            return state;
    }
}

export default adoptReducer