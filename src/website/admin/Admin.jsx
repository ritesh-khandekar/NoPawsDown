import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { admin } from '../actions/admin'
import Loader from '../components/Loader'
import { motion } from "framer-motion"
import PleaseLogin from './PleaseLogin'
import adoptionrequest from './adoption_requests_icon.png'
import donations_icon from './donations_icon.png'
import ngo from './ngo.png'
import users from './group.png'
import pets from './pawprint.png'
import { Link } from 'react-router-dom'

const Admin = () => {
  const dispatch = useDispatch()
  const [adminLogin, setAdminLogin] = useState(true)
  const [AdminData, setAdminData] = useState(true)
  const [isProgress, setisProgress] = useState(true)

  useEffect(() => {
    dispatch(admin(setisProgress, setAdminData, setAdminLogin))
  })

  return <>
    {
      isProgress ? <Loader /> : ""
    }
    {
      !adminLogin ?
        <PleaseLogin /> : ""
    }
    {
      adminLogin && AdminData ?
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container">
          <h2 className="text-primary py-3 text-center"><i>Admin Dashboard</i></h2>
          <div class="container d-flex flex-wrap justify-content-around mt-4">
            <div class="rounded-3 p-3 shadow-sm text-center" style={{ minWidth: "30%" }}>
              <img src={adoptionrequest} alt="Adoption Requests" width="100px" />
              <h5>Animal Adoption Requests</h5>
              <Link to={"adoptrequests"} class="btn px-4 py-2 shadow-sm btn-primary text-white mt-3">View Requests</Link>
            </div>
            <div class="rounded-3 p-3 shadow-sm text-center" style={{ minWidth: "30%" }}>
              <img src={donations_icon} alt="Donations" width="100px" />
              <h5>Donations</h5>
              <Link to={"donations"} class="btn px-4 py-2 shadow-sm btn-primary text-white mt-3">View Donations</Link>
            </div>
            <div class="rounded-3 p-3 shadow-sm text-center" style={{ minWidth: "30%" }}>
              <img src={ngo} alt="NGOs" width="100px" />
              <h5>Registered NGOs</h5>
              <Link to={"ngo"} class="btn px-4 py-2 shadow-sm btn-primary text-white mt-3">Registered NGOs</Link>
            </div>
            <div class="rounded-3 p-3 my-5 shadow-sm text-center" style={{ minWidth: "30%" }}>
              <img src={pets} alt="Pets" width="100px" />
              <h5>Available Pets</h5>
              <Link to={"pets"} class="btn px-4 py-2 shadow-sm btn-primary text-white mt-3">Available Pets</Link>
            </div>
            <div class="rounded-3 p-3 my-5 shadow-sm text-center" style={{ minWidth: "30%" }}>
              <img src={users} alt="Users" width="100px" />
              <h5>Registered Users</h5>
              <Link to={"users"} class="btn px-4 py-2 shadow-sm btn-primary text-white mt-3">Registered Users</Link>
            </div>
          </div>
        </motion.div> : ""
    }
  </>
}

export default Admin