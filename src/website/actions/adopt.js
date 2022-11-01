import * as api from '../api'


export const adopt = (adoptData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.adopt(adoptData)
        console.log(data._id)
        dispatch({ type: 'ADOPT', data})
        navigate('results')
    } catch (error) {
        alert("Invalid credentials!")
    }
}
