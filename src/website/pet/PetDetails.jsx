import React from 'react'
import { useState } from 'react'
import thanks from './../images/thankyou.png'

const PetDetails = () => {
    const [finishPage, setfinishPage] = useState(false)
    const { petId, petImgSrc, petName, petAge, petGender, petMessage, petType } = JSON.parse(localStorage.getItem("selectedPet"))
    return <>
        <div className="h2 text-primary text-center p-4">Adopt a Pet</div>
        {
            finishPage ?
                <>
                    <div className="text-center container p-3 text-secondary">
                        <div className="h3 text-center">
                        {/* <img src={thanks} alt="" className='w-50' /> */}
                            Thank you so much!
                        </div>
                        <div className="py-2">
                            We will contact you soon!
                        </div>
                    </div>
                </> :
                <>
                    <div className="container">
                        <div className="row d-flex g-3 justify-content-center align-items-center">
                            <div className="col-lg-5 col-md-6 col-sm-12 rounded">
                                <img src={require(`../uploads/${petImgSrc}`)} className="img-fluid w-50 float-end" alt="Adopt Pet dog" />
                                    <div className="card-title text-primary">
                                        <h4>{petName}</h4>
                                    </div>
                                    <div className="card-text py-2">
                                        Type: <b>{petType}</b> <br />
                                        Gender: <b>{petGender}</b> <br />
                                        Age: <b>{petAge}</b>
                                    </div>
                                    <div className="card-text">
                                        {petMessage}
                                    </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12 shadow-sm rounded mx-5 p-4">
                                <div className="text-center text-primary h4 py-2">
                                    Your Details
                                </div>
                                <>
                                    <form action="" autoComplete='false'>
                                        <div className="row m-0">
                                            <div className="m-1 form-group col">
                                                <input type="text" className="form-control" placeholder='Your Firstame' />
                                            </div>
                                            <div className="m-1 form-group col">
                                                <input type="text" className="form-control" placeholder='Your Lastname' id='' />
                                            </div>
                                        </div>
                                        <div className="row m-0">
                                            <div className="m-1 form-group col">
                                                <input type="text" className="form-control" placeholder='Phone Number' id='' />
                                            </div>
                                        </div>
                                        <div className="row m-0">
                                            <div className="m-1 form-group col">
                                                <input type="email" className="form-control" placeholder='Your email' id='' />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row m-0">
                                            <div className="m-1 form-group col">
                                                <input type="text" className="form-control" placeholder='State' />
                                            </div>
                                            <div className="m-1 form-group col">
                                                <input type="text" className="form-control" placeholder='City' id='' />
                                            </div>
                                        </div>
                                        <div className="row m-0">
                                            <div className="m-1 form-group col">
                                                <input type="text" className="form-control" placeholder='Pin code' />
                                            </div>
                                            <div className="m-1 form-group col">
                                                <input type="text" className="form-control" placeholder='Apartment, Suite, etc.' id='' />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between px-2">
                                            <button type="reset" className='btn btn-outline-danger mx-3 my-2 px-4 py-2'>Reset</button>
                                            <button type="button" className='btn btn-success mx-3 px-4 py-2 my-2' onClick={(e) => (e.preventDefault() || setfinishPage(true))}>Send Details</button>
                                        </div>
                                    </form>
                                </>
                            </div>
                        </div>
                    </div>
                </>
        }
    </>
}

export default PetDetails