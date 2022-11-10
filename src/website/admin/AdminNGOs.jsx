import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adminGetNGOs } from '../actions/admin'
import Loader from '../components/Loader'
import { motion } from "framer-motion"

const AdminNGOs = () => {

    const dispatch = useDispatch()
    const [isProgress, setisProgress] = useState(true)
    const [tableData, setTableData] = useState([])
    const [NGOs, setNGOs] = useState([])

    useEffect(() => {
        dispatch(adminGetNGOs(setisProgress, setTableData))
    }, [])

    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container py-3">
        {
            isProgress ? <Loader /> : ""
        }
        <div className="text-center py-4">
            <h2 className="">Registered NGOs</h2>
        </div>

        <table className="table shadow-sm table-light text-center table-stripped table-responsive table-bordered">
            <thead className='table-secondary'>
                <tr>
                    <th>Sr. No.</th>
                    <th>NGO Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Reviews</th>
                    <th>Stars</th>
                    <th>Phone</th>
                    <th>Joined On</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData ?
                        tableData.map(({ email, name, address, reviews, stars, phone, joinedOn }, number) => <tr key={number + 1}>
                            <td>{number + 1}</td>
                            <td className='text-secondary'><b>{name}</b></td>
                            <td><a href={"mailto:" + email}>{email}</a></td>
                            <td><i>{address}</i></td>
                            <td>{reviews}</td>
                            <td>{stars}</td>
                            <td><b><a href={"tel:"+phone}>{phone}</a></b></td>
                            <td>{joinedOn}</td>
                        </tr>
                        )
                        : ""
                }
            </tbody>
        </table>
    </motion.div>
}

export default AdminNGOs