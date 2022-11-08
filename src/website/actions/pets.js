import * as api from '../api'


export const givepet = (givepetData, navigate, setIsProgress) => async (dispatch) => {
    try {
        const { data } = await api.givepet(givepetData)
        console.log(data._id)
        dispatch({ type: 'GIVEPET', data})
        navigate('results')
    } catch (error) {
        console.log(error)
        alert("Invalid credentials!")
        setIsProgress(false)
    }
}

export const getpets = (setIsProgress, setAnimalInfo, isLogin, setNotLogin) => async (dispatch) => {
    if(!isLogin){
        setIsProgress(true)
        setNotLogin(true)
        return;
    }
    try {
        const { data } = await api.getpets()
        console.log(data)
        setAnimalInfo(data)
        dispatch({ type: 'GETPETS', data})
        setIsProgress(false)
    } catch (error) {
        alert("Invalid credentials!"+ error)
        setIsProgress(false)
    }
}
