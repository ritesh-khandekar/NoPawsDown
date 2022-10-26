import React from 'react'
import { useState } from 'react';
import cat from "../images/pet_adoption.webp";
import './steps.css'

const SponsorPet = () => {
    const [petDetails, setPetDetails] = useState(true)
    const [finishPage, setfinishPage] = useState(false)
    const [petDetailsFilled, setPetDetailsFilled] = useState(false)
    const [userDetailsFilled, setUserDetailsFilled] = useState(false)
    return (
        <>
            <div className="h2 text-primary text-center p-4">Give a pet for Adoption</div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul id="progress-bar" className="myprogress">
                            <li className="active" onClick={{}}>Pet Details</li>
                            <li className={petDetails ? "" : "active"}>User Details</li>
                            <li className={finishPage ? "active" : ""}>Finish</li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                finishPage ?
                    <>
                        <div className="text-center container p-3 text-secondary">
                            <div className="h3">
                                Thank you so much!
                            </div>
                            <div className="py-2">
                                We will contact you soon!
                            </div>
                        </div>
                    </> :
                    <>
                        <div className="container">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-lg-5 col-md-6 col-sm-12 rounded text-center p-3">
                                    <img src={cat} className="img-fluid" alt="Adopt Pet dog" />
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-12 rounded p-4">
                                    <div className="text-center text-primary h4 py-2">
                                        {petDetails ? "Pet Details" : "Your Details"}
                                    </div>
                                    {
                                        petDetails ?
                                            <>
                                                <form action="" autoComplete='false'>
                                                    <div className="row m-0">
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Pet Name' id='pet_name' />
                                                        </div>
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Pet Type' id='pet_type' />
                                                        </div>
                                                    </div>
                                                    <div className="row m-0">
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Age' id='pet_age' />
                                                        </div>
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Breed' id='pet_breed' />
                                                        </div>
                                                    </div>
                                                    <div className="row m-0">
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Weight' id='pet_weight' />
                                                        </div>
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Height' id='pet_height' />
                                                        </div>
                                                    </div>
                                                    <div className="form-row px-3">
                                                        <label htmlFor="pet_pic">Photos of your pet:</label>
                                                        <input type="file" name="" accept='image/*' className='form-control col' id="pet_pic" />
                                                    </div>
                                                    <div className="row p-4 py-3">
                                                        <textarea name="" id="" rows="5" className="form-control col" placeholder='Type a message...'></textarea>
                                                        <div className="form-text">Please share something about your pet.</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between px-2">
                                                        <button type="reset" className='btn btn-outline-danger mx-3 my-2 px-2 py-2'>Reset Form</button>
                                                        <button type="button" className='btn btn-primary mx-3 px-5 py-2 my-2 text-white' onClick={(e) => e.preventDefault() || setPetDetails(false)}>Next</button>
                                                    </div>
                                                </form>
                                            </>
                                            :
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
                                                        <button type="button" className='btn btn-outline-primary mx-3 my-2 px-2 py-2' onClick={(e) => e.preventDefault() || setPetDetails(true)}>Previous</button>
                                                        <button type="button" className='btn btn-success mx-3 px-4 py-2 my-2' onClick={(e) => (e.preventDefault() || setPetDetails(false)) || setfinishPage(true)}>Send Details</button>
                                                    </div>
                                                </form>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default SponsorPet