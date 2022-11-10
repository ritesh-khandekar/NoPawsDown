import React from 'react'
import { motion } from "framer-motion"

const About = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}  className="text-center row justify-content-center">
                <h1 className='py-3'>About Us</h1>
                <h4 className='pb-2'>Pets change our lives. We're on a quest to change theirs.</h4>
                <p className='col-md-6 col-sm-12 col-lg-7 p-3'>NoPawsDown is a nonprofit organization dedicated to adopting, fostering, and rehoming the abandoned, sick, and injured pets around our city. With you help, we hope to make a difference in the lives of these wonderful pets.</p>
            </motion.div>
        </>
    )
}

export default About