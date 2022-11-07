import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAARs, getDonations, getngo } from '../actions/ngo'
import Loader from '../components/Loader'
import AARA from './AARA'
import NGODonations from './NGODonations'

const NGOMainPage = () => {
    const dispatch = useDispatch()

    const [NGO, setNGO] = useState()
    const [AARSInfo, setAARSInfo] = useState({ requests: [] })
    const [isProgress, setIsProgress] = useState(true)
    const [showDonationDetails, setshowDonationDetails] = useState(true)
    const [donationsDetails, setdonationsDetails] = useState()
    const [isProgressAARS, setIsProgressAARS] = useState(true)

    useEffect(() => {
        dispatch(getngo(setIsProgress, setNGO))
    }, [])
    useEffect(() => {
        dispatch(getDonations(setIsProgress, setdonationsDetails))
    }, [])
    useEffect(() => {
        dispatch(getAARs(setIsProgressAARS, setAARSInfo))
    }, [])

    return <div className="container">
        {isProgress || isProgressAARS ? <Loader /> : ""}
        {
            NGO ?
                <div className="text-center py-4">
                    <h1 className="text-primary">{NGO.name}</h1>
                    <div>Contact Number: {NGO.phone}</div>
                </div>
                : ""
        }
        {
            NGO && showDonationDetails && donationsDetails ?
                <div className="container">
                    <h2 className='py-3'>Donations Received</h2>
                    <p>Donations received by <b className="text-primary">{NGO.name}</b></p>
                    <NGODonations Donations={donationsDetails} />
                </div> :
                AARSInfo.requests.length > 0 ?
                    <AARA AARAInfo={AARSInfo} setAARSInfo={setAARSInfo} /> : ""
        }
    </div>
}

export default NGOMainPage