import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup } from '../actions/auth'
import { motion } from "framer-motion"

import "./effects.css"


function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [allowedLogin, setallowedLogin] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !password) {
            alert('Please fill the required fields')
            return
        }
        dispatch(signup({ name, email, password }, navigate))

    }

    return <section className="py-4 bg-gradient vh-100 row d-flex justify-content-center align-items-center h-100" >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}  className="col-md-6 col-lg-4 col-sm-10 rounded bg-white shadow p-3">
                <p className="text-center h2 fw-bold my-3 mx-1 mx-md-4 text-primary">Register</p>

                <form className="mx-1 mx-md-4" autoComplete="off" autoSave="false" onSubmit={handleSubmit}>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa mr-2 fa-user fa-lg me-3 fa-fw text-primary"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" name="user[name]" onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="form-control text-primary border border-primary" />
                        </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa mr-2 fa-envelope fa-lg me-3 fa-fw text-primary"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" name="user[email]" className="form-control text-primary border border-primary" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />                                            </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa mr-2 fa-lock fa-lg me-3 fa-fw text-primary"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" name="user[password]" className="form-control text-primary border border-primary" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-check d-flex my-2">
                        <input className="form-check-input me-2 border border-primary" onChange={(e) => setallowedLogin(e.target.checked)} type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3c">
                            I agree all statements in <a className="text-primary">Terms of service</a>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4">
                        <input type="submit" disabled={!allowedLogin || !email || !password || !name} className="btn btn-primary btn text-white px-5 py-2 m-2 border border-light border-opacity-50" value={"Register"} />
                    </div>
                    <p className="text-center">Already have an Account? <Link to={"/login"} className="text-primary text-decoration-none">Login</Link></p>
                    <hr />
                    <div className="d-flex justify-content-between text-center px-5">
                        <Link to={"/ngo/login"} className="text-primary text-decoration-none">NGO Login</Link>
                        <Link to={"/ngo/register"} className="text-primary text-decoration-none">NGO Register</Link>
                    </div>
                </form>
            </motion.div>
    </section>
}
export default Register;