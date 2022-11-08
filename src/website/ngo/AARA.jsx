import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { approveRequest, getAARs, rejectRequest } from '../actions/ngo'
import Loader from '../components/Loader'
import AARADialogue from './AARADialogue'
import { motion } from "framer-motion"

const AARA = ({ AARAInfo, setAARSInfo, setshowMainPage, setshowAdoptionDetails, setshowDonationDetails }) => {
    const dispatch = useDispatch()

    const [isProgress, setisProgress] = useState(false)
    const [tableData, setTableData] = useState([])
    const [viewDialogue, setViewDialogue] = useState(false)


    const approveHandler = () => {
        const Req = localStorage.getItem("REQ")
        setisProgress(true)
        dispatch(approveRequest(setisProgress, Req, setViewDialogue, setData))
    }
    const rejectHandler = () => {
        const Req = localStorage.getItem("REQ")
        setisProgress(true)
        dispatch(rejectRequest(setisProgress, Req, setViewDialogue, setData))
    }
    useEffect(() => {
        setTableData(AARAInfo.map(function (obj, number) {
            number += 1
            const { PetName, certificate, petGender, cropData, petType, FirstName, LastName, Apartment, City, PinCode, State, Phone } = obj.petId
            const [petOwner, petName, petOwnerPhone, petOwnerAddress, petImage, adopter, adoptorPhone, adopterAddress, status, _id] = [(FirstName + " " + LastName), PetName, Phone, ([Apartment, City, State].join(", ") + " - " + PinCode), cropData, obj.FirstName + " " + obj.LastName, obj.Phone, ([obj.Apartment, obj.City, obj.State].join(", ") + " - " + obj.PinCode), obj.status, obj._id]
            return { petType, petGender,certificate, petOwner, petName, petOwnerPhone, petImage, petOwnerAddress, adopter, adoptorPhone, adopterAddress, status, number, approveHandler, rejectHandler, _id }
        }))
    }, [])

    const setData = (id, data) => {
        dispatch(getAARs(setisProgress, setAARSInfo, approveHandler, rejectHandler))
        // const o = tableData.filter((obj) => obj._id == id)
        // console.log(o)
        // tableData[parseInt(o.number) - 1] = { ...tableData[parseInt(o.number) - 1], ...data }
        // setTableData(tableData)
    }
    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container">
        {
            isProgress ? <Loader /> : ""
        }
        <nav aria-label="breadcrumb" className='py-3'>
            <ol class="breadcrumb border p-3 rounded">
                <li class="breadcrumb-item text-primary" onClick={()=> {setshowMainPage(true); setshowAdoptionDetails(false)}}>Home </li>
                <li class="breadcrumb-item active" aria-current="page">Animal Adoption Requests</li>
            </ol>
        </nav>
        <h2 className='py-3'>Animal Adoption Requests</h2>
        <p>Approve or reject a animal adoption request after verifying the details of adopter</p>
        {
            viewDialogue ?
                <AARADialogue {...tableData.filter((obj) => obj._id == localStorage.getItem("REQ"))[0]} viewDialogue={setViewDialogue} /> :
                ""
        }
        <table className="table table-stripped table-bordered">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Pet Type</th>
                    <th>Pet Gender</th>
                    <th>Pet Owner Name</th>
                    <th>Adopter Name</th>
                    <th>Adopter Address</th>
                    <th>More Details</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData ?
                        tableData.map(({ number, petType, petGender, petOwner, adopter, adopterAddress, status, _id }) => <tr key={number}>
                            <td>{number}</td>
                            <td>{petType}</td>
                            <td>{petGender}</td>
                            <td>{petOwner}</td>
                            <td>{adopter}</td>
                            <td>{adopterAddress}</td>
                            <td><button className="btn btn-primary text-white" onClick={(e) => { localStorage.setItem("REQ", _id); setViewDialogue(true); }}>View</button></td>
                            <td>{status}</td>
                        </tr>
                        )
                        : ""
                }
            </tbody>
        </table>
    </motion.div>
}

export default AARA