import React from 'react'
import Features from '../content/Features'
import Header from '../content/Header'
import { motion } from "framer-motion"

const Home = () => {
    return <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
        <Header />
        <Features />
    </motion.div>
    </>
}

export default Home