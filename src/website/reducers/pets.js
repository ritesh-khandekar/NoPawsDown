const petsReducer = (state= { data:null}, action) => {
    switch (action.type) {
        case 'GIVEPET':
            localStorage.setItem('GivePet', JSON.stringify({ ...action?.data}))
            return { ...state, data: action?.data }
        case 'GETPETS':
            localStorage.setItem('GetPets', JSON.stringify({ ...action?.data}))
            return { ...state, data: action?.data }
        default:
            return state;
    }
}

export default petsReducer