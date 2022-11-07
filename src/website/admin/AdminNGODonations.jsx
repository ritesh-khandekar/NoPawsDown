import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adminGetDonations } from '../actions/admin'
import Loader from '../components/Loader'
import { motion } from "framer-motion"

const AdminNGODonations = () => {

    const dispatch = useDispatch()
    const [isProgress, setisProgress] = useState(true)
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        dispatch(adminGetDonations(setisProgress, setTableData))
    }, [])

    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container py-4">
        {
            isProgress ? <Loader /> : ""
        }
        <div className="text-center py-4">
            <h2 className="text-primary">Donations Received</h2>
        </div>
        <table className="table shadow-sm text-center table-stripped table-bordered">
            <thead className='table-secondary'>
                <tr>
                    <th>Sr. No.</th>
                    <th>NGO Name</th>
                    <th>Doner Name</th>
                    <th>Doner Email</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Payment ID</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData ?
                        tableData.map(({ number, name, NGOname, NGOemail, email, amount, paymentID, date, address, reviews, stars }) => <tr key={number}>
                            <td>{number}</td>
                            <td className='text-primary'><b>{NGOname}</b></td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td className='text-success'><b>₹ {amount}</b></td>
                            <td>{date}</td>
                            <td>{paymentID}</td>
                        </tr>
                        )
                        : ""
                }
            </tbody>
        </table>
    </motion.div>
}

export default AdminNGODonations