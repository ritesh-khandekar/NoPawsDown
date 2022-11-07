import React from 'react'
import { motion } from "framer-motion"

const Loader = () => {
  return (
    <div className='vh-100 d-flex w-100 position-fixed top-0 justify-content-center align-items-center' style={{ left: 0, background: "rgba(0,0,0,0.5)" }}>
      {/* <div className="spinner-border text-white spinner-border-lg"></div> */}
      <motion.div
        className='bg-white p-3'
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          repeatCount: Infinity
        }}
        transition={
          {
            repeat: Infinity
          }
        }
      />
    </div>
  )
}

export default Loader