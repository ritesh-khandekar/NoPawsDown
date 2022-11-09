import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAARs, getDonations, getngo } from '../actions/ngo'
import Loader from '../components/Loader'
import adoptionrequest from '../admin/adoption_requests_icon.png'
import donations_icon from '../admin/donations_icon.png'
import AARA from './AARA'
import NGODonations from './NGODonations'
import PleaseLogin from "../components/PleaseLogin"
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const NGOMainPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [NGO, setNGO] = useState()
    const [AARSInfo, setAARSInfo] = useState({ requests: [] })
    const [isProgress, setIsProgress] = useState(true)

    const [totalDonations, settotalDonations] = useState(0)

    const [showDonationDetails, setshowDonationDetails] = useState(false)
    const [showAdoptionDetails, setshowAdoptionDetails] = useState(false)
    const [showMainPage, setshowMainPage] = useState(true)

    const [donationsDetails, setdonationsDetails] = useState()

    const [isProgressAARS, setIsProgressAARS] = useState(true)
    const [NGOLogin, setNGOLogin] = useState(true)

    useEffect(()=>{
        if(window.location.pathname.includes('aar')){
            setshowAdoptionDetails(true)
            setshowMainPage(false)
        }
    },[])
    useEffect(() => {
        dispatch(getngo(setIsProgress, setNGO, setNGOLogin))
    }, [])
    useEffect(() => {
        dispatch(getDonations(setIsProgress, setdonationsDetails, settotalDonations, setNGOLogin))
    }, [])
    useEffect(() => {
        dispatch(getAARs(setIsProgressAARS, setAARSInfo))
    }, [])

    return <div className="container">
        {isProgress || isProgressAARS ? <Loader /> : ""}

        {
            NGOLogin && NGO ?
                <div className="text-center py-4">
                    <h1 className="text-primary">{NGO.name}</h1>
                    <div>Contact Number: {NGO.phone}</div>
                </div>
                : <PleaseLogin LoginText={"Please Login as NGO"} NGOLogin={true}/>
        }
        {
            NGOLogin && showMainPage ?
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} class="container d-flex justify-content-between flex-wrap mt-4">
                    <div class="rounded-3 p-5 shadow text-center" style={{ minWidth: "40%" }}>
                        <img src={adoptionrequest} alt="Donate Icon" width="140px" />
                        <h4>Animal Adoption Requests</h4>
                        <button class="btn btn-lg btn-primary text-white mt-3" onClick={() => { setshowAdoptionDetails(true); setshowDonationDetails(false); setshowMainPage(false); }}>View Requests</button>
                    </div>
                    <div class="rounded-3 p-5 shadow text-center" style={{ minWidth: "40%" }}>
                        <img src={donations_icon} alt="Donate Icon" width="140px" />
                        <h4>Donations Received</h4>
                        <button class="btn btn-lg btn-primary text-white mt-3" onClick={() => { setshowDonationDetails(true); setshowAdoptionDetails(false); setshowMainPage(false); }}>View Donations</button>
                    </div>
                </motion.div> : ""
        }
        {
            NGOLogin && NGO && showDonationDetails && donationsDetails ?
                <div className="container">
                    <nav aria-label="breadcrumb" className='py-3'>
                        <ol class="breadcrumb border p-3 rounded">
                            <li class="breadcrumb-item text-primary" onClick={() => { setshowMainPage(true); setshowDonationDetails(false) }}>Home </li>
                            <li class="breadcrumb-item active" aria-current="page">Donations Received</li>
                        </ol>
                    </nav>
                    <h2 className='py-3'>Donations Received</h2>
                    <h4 className='py-2'>Total Donation Received: <b className='text-success'>₹ {totalDonations}</b></h4>
                    <p>Donations received by <b className="text-primary">{NGO.name}</b></p>
                    <NGODonations Donations={donationsDetails} />
                </div> : ""
        }
        {
            NGOLogin && showAdoptionDetails && AARSInfo && AARSInfo.length > 0 ?
                <AARA AARAInfo={AARSInfo} setshowMainPage={setshowMainPage} setshowDonationDetails={setshowDonationDetails} setshowAdoptionDetails={setshowAdoptionDetails} setAARSInfo={setAARSInfo} /> : ""
        }
    </div>
}

export default NGOMainPage