import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PleaseLogin = ({ }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='vh-100 d-flex w-100 position-fixed top-0 justify-content-center align-items-center' style={{ left: 0, background: "rgba(0,0,0,0.5)" }}>
      <div className="text-center bg-white p-3 rounded shadow">
        <h3 className="text-danger">Please Login as Admin</h3>
        <p className='p-3'>Please <Link to={"/admin/login"}>Login</Link> to continue...
          <br />
        </p>
      </div>
    </motion.div>
  )
}

export default PleaseLogin