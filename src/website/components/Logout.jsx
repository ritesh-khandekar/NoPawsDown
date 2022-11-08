import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/all';

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    dispatch(logout(navigate, dispatch))
    return <></>
}

export default Logout