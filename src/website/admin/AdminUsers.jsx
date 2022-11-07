import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adminGetPets, adminGetUsers } from '../actions/admin'
import Loader from '../components/Loader'

const AdminUsers = () => {

    const dispatch = useDispatch()
    const [isProgress, setisProgress] = useState(true)
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        dispatch(adminGetUsers(setisProgress, setTableData))
    }, [])

    return <div className="container py-4">
        {
            isProgress ? <Loader /> : ""
        }
        <div className="text-center py-4">
            <h2 className="text-primary">Users Database</h2>
        </div>
        <table className="table shadow-sm text-center table-stripped table-bordered">
            <thead className='table-secondary'>
                <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Joined On</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData ?
                        tableData.map(({ name, email, joinedOn }, number) => <tr key={number + 1}>
                            <td>{number + 1}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{joinedOn}</td>
                        </tr>
                        )
                        : ""
                }
            </tbody>
        </table>
    </div>
}

export default AdminUsers