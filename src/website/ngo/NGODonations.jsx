import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../components/Loader'
import { motion } from "framer-motion"

const NGODonations = ({ Donations, totalDonations }) => {

    const [isProgress, setisProgress] = useState(false)
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        setTableData(Donations.map(function (obj, number) {
            number += 1
            const { name, email } = obj.UserID
            const { amount, paymentID, date } = obj
            return { number, name, email, amount, paymentID, date }
        }))
    }, [])

    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container">
        {
            isProgress ? <Loader /> : ""
        }

        <table className="table table-light shadow table-stripped table-bordered">
            <thead>
                <tr>
                    <th>Sr. No.</th>
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
                        tableData.map(({ number, email, name, amount, paymentID, date }) => <tr key={number}>
                            <td>{number}</td>
                            <td><b className='text-primary'>{name}</b></td>
                            <td>{email}</td>
                            <td><b className='text-success'>₹ {amount}</b></td>
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

export default NGODonations