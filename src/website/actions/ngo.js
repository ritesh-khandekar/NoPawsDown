import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const getngo = (setIsProgress, setNGOInfo, setNGOLogin) => async (dispatch) => {
    try {
        const id = JSON.parse(localStorage.getItem("Profile")).result._id
        const { data } = await api.getngo(id)
        setNGOInfo(data.ngo)
        dispatch({ type: 'GETNGO', data })
        setIsProgress(false)
    } catch (error) {
        // alert("Invalid credentials!" + error)
        setNGOLogin(false)
        setIsProgress(false)
    }
}

export const getNGOs = (setIsProgress, setNGOInfo, setNGOLogin) => async (dispatch) => {
    try {
        const { data } = await api.getNGOs()
        setNGOInfo(data)
        dispatch({ type: 'getNGOS', data })
        setIsProgress(false)
    } catch (error) {
        // alert("Invalid credentials!" + error)
        setIsProgress(false)
        setNGOLogin(false)
    }
}

export const getDonations = (setIsProgress, setDonationsInfo, setTotalDonations, setNGOLogin) => async (dispatch) => {
    try {
        const id = JSON.parse(localStorage.getItem("Profile")).result._id
        const { data } = await api.getDonations(id)
        console.log(data)
        let total = data.donations.reduce((acc, val, i) => acc + val.amount, 0)
        setTotalDonations(total)
        setDonationsInfo(data.donations)
        dispatch({ type: 'getNGOS', data })
        setIsProgress(false)
    } catch (error) {
        // alert("Invalid credentials!" + error)
        setNGOLogin(false)
        setIsProgress(false)
    }
}

export const getAARs = (setIsProgress, setAARSInfo) => async (dispatch) => {

    try {
        const id = JSON.parse(localStorage.getItem("Profile")).result.reviews
        const { data } = await api.getAARs()
        
        setAARSInfo(data.requests)
        dispatch({ type: 'GET_AA_REQUESTS', data })
        setIsProgress(false)
    } catch (error) {
        // alert("Invalid credentials!" + error)
        setIsProgress(false)
    }
}

export const approveRequest = (setIsProgress, ObjID, setView, setData) => async (dispatch) => {
    try {
        const { data } = await api.approveRequest({ id: ObjID })
        dispatch({ type: 'APPROVE_REQUEST', data })
        setView(false)
        setIsProgress(false)
        setData(data.data._id, data.data)
    } catch (error) {
        alert("Invalid credentials!" + error)
        setIsProgress(false)
    }
}

export const rejectRequest = (setIsProgress, ObjID, setView, setData) => async (dispatch) => {
    try {
        const { data } = await api.rejectRequest({ id: ObjID })
        dispatch({ type: 'REJECT_REQUEST', data })
        setView(false)
        setIsProgress(false)
        setData(data.data._id, data.data)
    } catch (error) {
        alert("Invalid credentials!" + error)
        setIsProgress(false)
    }
}


export const ngoRegister = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.ngoRegister(authData)
        console.log(data)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/ngo')
    } catch (error) {
        alert("Invalid credentials!")
    }
}

export const ngoLogin = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.ngoLogin(authData)
        dispatch({ type: 'AUTH', data })
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/ngo')
    } catch (error) {
        alert("Invalid credentials!")
    }
}