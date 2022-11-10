import React from 'react'
import { motion } from "framer-motion"
import success_tick from "../images/success_tick.png"
import { Link } from 'react-router-dom'
import "./printer.css"

const DonateTrustResults = () => {
  const Donation = JSON.parse(localStorage.getItem("Donation"))?.result
  const NGO = JSON.parse(localStorage.getItem("selectedNGO"))
  const User = JSON.parse(localStorage.getItem("Profile"))?.result
  return <>
    <main>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center vh-100 container p-3">
        <h2 className="text-center fw-bold pb-2" style={{ color: "#00d459" }}>
          THANK YOU!
        </h2>
        <img src={success_tick} width="150px" alt="" />
        <div className='display-2 fw-bold pt-3'>₹{Donation.amount} </div>
        <h4 className="text-center fw-bold py-2 pb-2">
          Thank you for Donating <b className="text-success">₹{Donation.amount}</b> to <b className="text-primary">{NGO.name}</b>
        </h4>
        <div>
          <h5>Transaction ID: {Donation.paymentID}</h5>
          <h5>Doner Name: {User.name}</h5>
          <h5>Date: {(new Date()).toLocaleDateString()}</h5>
          <button className="btn noprint btn-secondary text-white" onClick={() => { window.print() }}>Print receipt</button>
          <div className="noprint">
            <hr />
            <Link to={"/donate"} >View More NGOs</Link>
          </div>
        </div>
      </motion.div>
    </main>
  </>
}

export default DonateTrustResults