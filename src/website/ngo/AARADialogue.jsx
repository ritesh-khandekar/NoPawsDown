import React from 'react'

const AARADialogue = ({ number, petType, adopted, petOwner, petName, petOwnerPhone, petOwnerAddress, petImage, certificate, adopter, adoptorPhone, adopterAddress, status, approveHandler, rejectHandler, viewDialogue }) => {
    console.log(adopted)
    return <div className='vh-100 d-flex w-100 position-fixed top-0 justify-content-center align-items-center' style={{ left: 0, backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div className="p-4 rounded-3 pb-3 bg-white shadow">

            <div>
                <button className="bg-white border-0 px-3" onClick={() => { viewDialogue(false) }} style={{float: "right"}}> <b>&times;</b> </button>
                <div className='text-center'>Sr. No.: <b className='text-primary'>{number}</b></div>
                <hr />
                <img src={petImage} alt="" width={"150px"} className='float-end' />
                <div>Pet Type: <b>{petType}</b></div>
                <div>Pet Name: <b>{petName}</b></div>
                <div>Pet Owner Name: <b>{petOwner}</b></div>
                <div>Pet Owner Address: <b>{petOwnerAddress}</b></div>
                <div>Pet Owner Contact No.: <b>{petOwnerPhone}</b></div>
                <hr />
                <a href={certificate} target="_blank"><img src={certificate} alt="" width={"150px"} className='float-end' /></a>
                <div>Adopter Name: <b>{adopter}</b></div>
                <div>Adopter Contact No.: <b>{adoptorPhone}</b></div>
                <div>Adopter Address: <b>{adopterAddress}</b></div>
                <div>Status: <b>{status}</b></div>
                <div className="my-2 mt-4 d-flex justify-content-between align-items-center">
                    <button className="btn btn-danger px-3" onClick={rejectHandler}>Reject</button>
                    <button className="btn btn-success px-4" onClick={approveHandler}>Approve</button>
                </div>
            </div>
        </div>
    </div>
}

export default AARADialogue