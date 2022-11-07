import * as api from '../api'


export const donate = (donateData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.donate(donateData)
        dispatch({ type: 'DONATE', data})
        navigate('results')
    } catch (error) {
        alert("Invalid credentials for Donation!")
    }
}
