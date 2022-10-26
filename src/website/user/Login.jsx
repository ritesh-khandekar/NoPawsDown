import "./effects.css"
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signup, login } from '../actions/auth'
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !password){
            alert('Enter email and password')
            return
        }
        dispatch(login({ email, password }, navigate))
    }
    return <section className="py-4 bg-gradient vh-100 row d-flex justify-content-center align-items-center h-100" >
        <div className="col-md-6 col-lg-4 col-sm-10 rounded bg-white shadow p-3">
            <p className="text-center h2 fw-bold my-3 mx-1 mx-md-4 text-primary">Login</p>

            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa mr-2 fa-envelope fa-lg me-3 fa-fw text-primary"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" className="form-control border border-primary text-primary" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />                                            </div>
                </div>

                <div className="d-flex flex-row align-items-center my-2">
                    <i className="fa mr-2 fa-lock fa-lg me-3 fa-fw text-primary"></i>
                    <div className="form-outline flex-fill">
                        <input type="password" id="form3Example4c" className="form-control border border-primary text-primary" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                </div>
                <p className="text-center">
                    <label htmlFor="check">
                        <input type="checkbox" name="remember" className="mx-1" />
                        Remember Me
                    </label>
                </p>
                <div className="d-flex justify-content-center mx-4 mb-3">
                    <button type="submit" className="btn btn-primary btn border-opacity-50 px-5 py-2 border border-light text-white">Login and Continue</button>
                </div>
                <p className="text-center">New to our Website? <Link to={"/register"} className="text-primary text-decoration-none">Register</Link></p>
            </form>
        </div>

    </section>
}
export default Login;