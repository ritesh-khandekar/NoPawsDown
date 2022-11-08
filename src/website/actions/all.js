import { useEffect } from "react"
import { setCurrentUser } from "./currentUser"

export const redirect = (login, navigate) => async (dispatch) => {
    try {
        console.log(login)
        switch (login) {
            case 'ADMIN':
                navigate('admin')
                break
            case 'NGO':
                navigate('ngo')
                break
        }
    } catch (error) {
        // alert("Invalid credentials!")
    }
}
export const logout = (navigate, dispatch) => async (dispatch) => {
    try {
        dispatch({ type: 'LOGOUT' });
        useEffect(()=>{
            navigate('/')
        })
        dispatch(setCurrentUser(null))
    } catch (error) {
        alert("Invalid credentials!")
    }
}