import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const adminGetDonations = (setIsProgress, setData) => async (dispatch) => {
    try {
        const { data } = await api.adminGetDonations()
        const listdata = data.donations.map(function (obj, number) {
            number += 1
            let NGOname, NGOemail;
            {
                let { name, email } = obj.NGOID
                NGOname = name;
                NGOemail = email;
            }
            const { address, reviews, stars } = obj.NGOID
            const { name, email } = obj.UserID
            const { amount, paymentID, date } = obj
            return { number, name, email, NGOname, NGOemail, amount, paymentID, date, address, reviews, stars }
        })
        setData(listdata)
        setIsProgress(false)
    } catch (error) {
        alert("Invalid credentials!" + error)
        setIsProgress(false)
    }
}
export const adminGetNGOs = (setIsProgress, setData) => async (dispatch) => {
    try {
        const { data } = await api.adminGetNGOs()
        console.log(data)
        setData(data.ngoslist)
        setIsProgress(false)
    } catch (error) {
        alert("Invalid credentials!" + error)
        setIsProgress(false)
    }
}
export const adminGetPets = (setIsProgress, setData) => async (dispatch) => {
    try {
        const { data } = await api.adminGetPets()
        console.log(data)
        setData(data.petslist)
        setIsProgress(false)
    } catch (error) {
        alert("Invalid credentials!" + error)
        setIsProgress(false)
    }
}
export const adminGetUsers = (setIsProgress, setData) => async (dispatch) => {
    try {
        const { data } = await api.adminGetUsers()
        console.log(data)
        setData(data.userslist)
        setIsProgress(false)
    } catch (error) {
        alert("Invalid credentials!" + error)
        setIsProgress(false)
    }
}
export const adminGetAdoptRequests = (setIsProgress, setData) => async (dispatch) => {
    try {
        let { data } = await api.adminGetAdoptRequests()
        setData(data.adoptRequests)
        setIsProgress(false)
    } catch (error) {
        alert("Invalid credentials!" + error)
        setIsProgress(false)
    }
}
export const admin = (setIsProgress, setData, setAdminLogin) => async (dispatch) => {
    try {
        const id = JSON.parse(localStorage.getItem("Profile")).result.type;
        let { data } = await api.admin();
        setData(data.result)
        setIsProgress(false)
        setAdminLogin(true)
    } catch (error) {
        // alert("Invalid credentials!" + error)
        setAdminLogin(false)
        setIsProgress(false)
    }
}
export const adminLogin = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.adminLogin(authData)
        console.log(data)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
        navigate('/admin')
    } catch (error) {
        alert("Invalid credentials!"+error)
    }
}