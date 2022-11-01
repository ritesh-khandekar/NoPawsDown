import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import uploadPicImg from "../images/upload_photo.png";
import './steps.css'
import { givepet } from '../actions/pets';
import ImageCrop from './ImageCrop';


const GivePet = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userDetails, setUserDetails] = useState(false)
    const [finishPage, setfinishPage] = useState(false)
    const [isProgress, setIsProgress] = useState(false)

    const [PetName, setPetName] = useState("")
    const [petType, setpetType] = useState("")
    const [petAge, setpetAge] = useState("")
    const [petGender, setpetGender] = useState("")
    const [petWeight, setpetWeight] = useState("")
    const [petHeight, setpetHeight] = useState("")
    const [petMessage, setpetMessage] = useState("")

    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [State, setState] = useState("")
    const [City, setCity] = useState("")
    const [PinCode, setPinCode] = useState("")
    const [Apartment, setApartment] = useState("")


    const [picture, setPicture] = useState(null); 
    const [imgData, setImgData] = useState(null); // original image passing to cropper js
    const [imgCrop, setImgCrop] = useState(false); // cropper.js layout
    const [cropData, setCropData] = useState(null); // preview cropped image

    const onChangePic = (e) => {
        e.preventDefault()
        if (e.target.files[0]) {
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
            setImgCrop(true)

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let data = { FirstName, LastName, Email, Phone, State, City, PinCode, Apartment, PetName, petType, petAge, petGender, petWeight, petHeight, cropData }
        let filledData = true;
        for (let key in data) {
            if (data[key] == null || data[key] == "") {
                filledData = false;
            }
        }
        if (!filledData) {
            alert("Please fill the required fields!")
            return;
        }
        setIsProgress(true)

        dispatch(givepet(data, navigate, setIsProgress))
    }
    return (
        <>
            <div className="h2 text-primary text-center p-4">Give a pet for Adoption</div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul id="progress-bar" className="myprogress">
                            <li className="active">Pet Details</li>
                            <li className={userDetails ? "active" : ""}>User Details</li>
                            <li className={finishPage ? "active" : ""}>Finish</li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                imgCrop ?
                <ImageCrop image={imgData} setCropData={setCropData} setImgCrop={setImgCrop} />: ""
            }
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
                                    <img src={cropData ? cropData: uploadPicImg} className="img-fluid" alt="Adopt Pet dog" />
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-12 rounded p-4">
                                    <div className="text-center text-primary h4 py-2">
                                        {!userDetails ? "Pet Details" : "Your Details"}
                                    </div>
                                    {
                                        userDetails ?
                                            <>
                                                <form action="" onSubmit={handleSubmit} autoComplete='false'>
                                                    <div className="row m-0">
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setFirstName(e.target.value)} value={FirstName} placeholder='Your Firstname' />
                                                        </div>
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setLastName(e.target.value)} value={LastName} placeholder='Your Lastname' id='' />
                                                        </div>
                                                    </div>
                                                    <div className="row m-0">
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setPhone(e.target.value)} value={Phone} placeholder='Phone Number' id='' />
                                                        </div>
                                                    </div>
                                                    <div className="row m-0">
                                                        <div className="m-1 form-group col">
                                                            <input type="email" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setEmail(e.target.value)} value={Email} placeholder='Your email' id='' />
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row m-0">
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setState(e.target.value)} value={State} placeholder='State' />
                                                        </div>
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setCity(e.target.value)} value={City} placeholder='City' id='' />
                                                        </div>
                                                    </div>
                                                    <div className="row m-0">
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setPinCode(e.target.value)} value={PinCode} placeholder='Pin code' />
                                                        </div>
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setApartment(e.target.value)} value={Apartment} placeholder='Apartment, Suite, etc.' id='' />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between px-2">
                                                        <button type="button" className='btn btn-outline-primary mx-3 my-2 px-2 py-2' disabled={isProgress ? true : false} onClick={(e) => { e.preventDefault(); setUserDetails(false) }}>Previous</button>
                                                        <button type="submit" className='btn btn-success mx-3 px-4 py-2 my-2' disabled={isProgress ? true : false} >Send Details{isProgress ? <div className="spinner-border spinner-border-sm"></div> : ""}</button>
                                                    </div>
                                                </form>
                                            </> : <>
                                                <form action="" autoComplete='false'>
                                                    <div className="row m-0">
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Pet Name' onChange={(e) => setPetName(e.target.value)} value={PetName} id='pet_name' />
                                                        </div>
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Pet Type' onChange={(e) => setpetType(e.target.value)} value={petType} id='pet_type' />
                                                        </div>
                                                    </div>
                                                    <div className="row m-0">
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Age' onChange={(e) => setpetAge(e.target.value)} value={petAge} id='pet_age' />
                                                        </div>
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Gender' onChange={(e) => setpetGender(e.target.value)} value={petGender} id='pet_breed' />
                                                        </div>
                                                    </div>
                                                    <div className="row m-0">
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Weight' onChange={(e) => setpetWeight(e.target.value)} value={petWeight} id='pet_weight' />
                                                        </div>
                                                        <div className="m-1 form-group col">
                                                            <input type="text" className="form-control" placeholder='Height' onChange={(e) => setpetHeight(e.target.value)} value={petHeight} id='pet_height' />
                                                        </div>
                                                    </div>
                                                    <div className="form-row px-3">
                                                        <label htmlFor="pet_pic">Photos of your pet:</label>
                                                        <input type="file" name="" accept='image/*' className='form-control col' onChange={onChangePic} />
                                                    </div>
                                                    <div className="row p-4 py-3">
                                                        <textarea name="" id="" rows="5" className="form-control col" placeholder='Type a message...' onChange={(e) => setpetMessage(e.target.value)} value={petMessage}></textarea>
                                                        <div className="form-text">Please share something about your pet.</div>
                                                    </div>
                                                    <div className="d-flex justify-content-between px-2">
                                                        <button type="reset" className='btn btn-outline-danger mx-3 my-2 px-2 py-2'>Reset Form</button>
                                                        <button type="button" className='btn btn-primary mx-3 px-5 py-2 my-2 text-white' onClick={(e) => { e.preventDefault(); setUserDetails(true) }}>Next</button>
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

export default GivePet