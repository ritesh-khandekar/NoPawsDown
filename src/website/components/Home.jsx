import React from 'react'
import Features from '../content/Features'
import Header from '../content/Header'
import { motion } from "framer-motion"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { redirect } from '../actions/all'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    let profile = JSON.parse(localStorage.getItem("Profile"))

    let login = "USER"

    if (profile) {
        profile = profile.result
        try {
            let p = profile['reviews'] > 0
            login = p ? "NGO" : login
        } catch (e) {
        }
        try {
            let p = profile['type'].length > 0
            login = p ? "ADMIN" : login
        } catch (e) {
        }

    }
    useEffect(() => {
        dispatch(redirect(login, navigator))
    })
    return <>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
            <Header />
            <Features />
        </motion.div>
    </>
}

export default Home