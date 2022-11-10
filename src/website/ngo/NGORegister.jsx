import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ImageCrop from './../pet/ImageCrop';
import "./effects.css"
import uploadPicImg from "../images/upload_photo.png";
import { ngoRegister } from "../actions/ngo";
import { motion } from "framer-motion"


function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [image, seImage] = useState('')
    const [phone, setPhone] = useState('')
    const [accountNumber, setaccountNumber] = useState(0)
    const [IFSC, setIFSC] = useState('')
    const [UPI, setUPI] = useState('')
    const [description, setdescription] = useState('')
    const [password, setPassword] = useState('')
    const [allowedLogin, setallowedLogin] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        if (!name || !email || !password) {
            alert('Please fill the required fields')
            return
        }
        const image = cropData;
        dispatch(ngoRegister({ name, email, password, address, image, phone, image, accountNumber, IFSC, UPI, description }, navigate))

    }

    return <>
        {
            imgCrop ?
                <ImageCrop image={imgData} setCropData={setCropData} setImgCrop={setImgCrop} /> : ""
        }
        <section className="vh-100 mt-2 row d-flex justify-content-center align-items-center h-100" >
            <div className="col-lg-4 col-md-6 col-sm-12 rounded text-center">
                <img src={cropData ? cropData : uploadPicImg} className="img-fluid rounded shadow" alt="Adopt Pet dog" />
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-md-6 col-lg-8 col-sm-10 rounded bg-white p-3">
                <p className="text-center h2 fw-bold my-3 mx-1 mx-md-4 text-secondary">NGO Register</p>
                <form className="mx-1 mx-md-4" autoComplete="off" autoSave="false" onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <div className="mx-4" style={{ width: "40%" }}>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fa mr-2 fa-user fa-lg me-3 fa-fw text-secondary"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="text" id="form3Example1c" name="user[name]" onChange={(e) => setName(e.target.value)} placeholder="NGO Name" className="form-control text-secondary border border-primary" />
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fa mr-2 fa-phone fa-lg me-3 fa-fw text-secondary"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="tel" className="form-control text-secondary border border-primary" onChange={(e) => setPhone(e.target.value)} placeholder="NGO Contact Number" />                                            </div>
                            </div>
                            <div className="form-row px-3 text-center text-secondary">
                                <label htmlFor="pet_pic">Upload Icon of your NGO</label>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fa mr-2 fa-picture-o fa-lg me-3 fa-fw text-secondary"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="file" name="" accept='image/*' className='form-control col text-secondary border border-primary' onChange={onChangePic} />
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fa mr-2 fa-address-card fa-lg me-3 fa-fw text-secondary"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <textarea rows={3} className="form-control text-secondary border border-primary" onChange={(e) => setAddress(e.target.value)} placeholder="NGO Address" ></textarea>                                        </div>
                            </div>

                        </div>
                        <div className="mx-4" style={{ width: "40%" }}>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fa mr-2 fa-envelope fa-lg me-3 fa-fw text-secondary"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="email" id="form3Example3c" className="form-control text-secondary border border-primary" onChange={(e) => setEmail(e.target.value)} placeholder="NGO Email" />                                            </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fa mr-2 fa-bank fa-lg me-3 fa-fw text-secondary"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="number" id="form3Example3c" className="form-control text-secondary border border-primary" onChange={(e) => setaccountNumber(e.target.value)} placeholder="Account Number" />                                            </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fa mr-2 fa-bank fa-lg me-3 fa-fw text-secondary"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="text" id="form3Example3c" className="form-control text-secondary border border-primary" onChange={(e) => setIFSC(e.target.value)} placeholder="IFSC Code" />                                            </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fa mr-2 fa-credit-card fa-lg me-3 fa-fw text-secondary"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="text" id="form3Example3c" className="form-control text-secondary border border-primary" onChange={(e) => setUPI(e.target.value)} placeholder="UPI ID" />                                            </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fa mr-2 fa-lock fa-lg me-3 fa-fw text-secondary"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4c" name="user[password]" className="form-control text-secondary border border-primary" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa mr-2 fa-key fa-lg me-3 fa-fw text-secondary"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" name="user[password2]" className="form-control text-secondary border border-primary" onChange={(e)=> setPassword(e.target.value)} placeholder="Repeat Your Password" />
                    </div>
                </div> */}
                    <div className="d-flex flex-row flex-grow-1 align-items-center justify-content-center px-4 mb-4">
                        <i className="fa mr-2 fa-sticky-note fa-lg me-3 fa-fw text-secondary"></i>
                        <div className="form-outline flex-fill mb-0">
                            <textarea rows={3} className="form-control text-secondary border border-primary" style={{ width: "92%"}}  onChange={(e) => setdescription(e.target.value)} placeholder="NGO Description" ></textarea>                                        </div>
                    </div>
                    <div className="form-check d-flex my-2 justify-content-center">
                        <input className="form-check-input me-2 border border-primary" onChange={(e) => setallowedLogin(e.target.checked)} type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3c">
                            I agree all statements in <a className="text-secondary">Terms of service</a>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4">
                        <input type="submit" disabled={!allowedLogin || !email || !password || !name} className="btn btn-secondary btn text-white px-5 py-2 m-2 border border-light border-opacity-50" value={"Register"} />
                    </div>
                    <p className="text-center">Already have an Account? <Link to={"/ngo/login"} className="text-secondary text-decoration-none">Login</Link></p>

                </form>
            </motion.div>

        </section>
    </>
}
export default Register;