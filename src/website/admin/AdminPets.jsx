import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adminGetPets } from '../actions/admin'
import Loader from '../components/Loader'

const AdminPets = () => {

    const dispatch = useDispatch()
    const [isProgress, setisProgress] = useState(true)
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        dispatch(adminGetPets(setisProgress, setTableData))
    }, [])

    return <div className="container py-4">
        {
            isProgress ? <Loader /> : ""
        }
        <div className="text-center py-4">
            <h2 className="text-primary">Pets for Adoption</h2>
        </div>
        <table className="table shadow-sm text-center table-stripped table-bordered">
            <thead className='table-secondary'>
                <tr>
                    <th>Sr. No.</th>
                    <th>Pet Name</th>
                    <th>Pet Type</th>
                    <th>Pet Age</th>
                    <th>Pet Gender</th>
                    <th>Pet Weight</th>
                    <th>Pet Height</th>
                    <th>Owner Name</th>
                    <th>Owner Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData ?
                        tableData.map(({ petId, petGender, State, City, PinCode, petWeight, Phone, petHeight, Email, FirstName, LastName, cropData, PetName, petAge, petMessage, petType }, number) => <tr key={number + 1}>
                            <td>{number + 1}</td>
                            <td><b>{PetName}</b></td>
                            <td>{petType}</td>
                            <td>{petAge}</td>
                            <td>{petGender}</td>
                            <td>{petWeight}</td>
                            <td>{petHeight}</td>
                            <td>{FirstName + " " + LastName}</td>
                            <td>{Email}</td>
                            <td>{Phone}</td>
                            <td>{State + ", " + City + " - " + PinCode}</td>
                        </tr>
                        )
                        : ""
                }
            </tbody>
        </table>
    </div>
}

export default AdminPets