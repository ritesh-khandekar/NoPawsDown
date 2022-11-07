import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adminGetAdoptRequests, adminGetDonations } from '../actions/admin'
import Loader from '../components/Loader'

const AdminAdoptRequests = () => {

    const dispatch = useDispatch()
    const [isProgress, setisProgress] = useState(true)
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        dispatch(adminGetAdoptRequests(setisProgress, setTableData))
    }, [])

    return <div className="container py-4">
        {
            isProgress ? <Loader /> : ""
        }
        <div className="text-center py-4">
            <h2 className="text-primary">Adopt Requests</h2>
        </div>
        <table className="table shadow-sm text-center table-stripped table-bordered">
            <thead className='table-secondary'>
                <tr>
                    <th>Sr. No.</th>
                    <th>Adopter Name</th>
                    <th>Adopter Email</th>
                    <th>Adopter Phone</th>
                    <th>Pet Name</th>
                    <th>Pet Type</th>
                    <th>Pet Age</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData ?
                        tableData.map(({ FirstName, LastName, Email, Phone, status, petId }, number) => <tr key={number + 1}>
                            <td>{number + 1}</td>
                            <td className='text-primary'><b>{FirstName + " " + LastName}</b></td>
                            <td>{Email}</td>
                            <td>{Phone}</td>
                            <td>{petId.PetName}</td>
                            <td>{petId.petType}</td>
                            <td>{petId.petAge}</td>
                            <td>{status}</td>
                        </tr>
                        )
                        : ""
                }
            </tbody>
        </table>
    </div>
}

export default AdminAdoptRequests