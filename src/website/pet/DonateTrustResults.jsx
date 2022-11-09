import React from 'react'
import { motion } from "framer-motion"
import success_tick from "../images/success_tick.png"

const DonateTrustResults = () => {
  const Donation = JSON.parse(localStorage.getItem("Donation"))?.result
  return <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center container p-3">
      <h2 className="text-center fw-bold pb-2" style={{ color: "#00d459" }}>
        THANK YOU!
      </h2>
      <img src={success_tick} width="150px" alt="" />
      <div className='display-2 fw-bold pt-3'>₹{Donation.amount} </div>
      <h4 className="text-center fw-bold py-2 pb-2">
        YOUR DONATION WAS SUCCESSFUL!
      </h4>
    </motion.div>
  </>
}

export default DonateTrustResults