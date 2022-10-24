import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import webjson from "../tools/SiteConsts.js"
import "./effects.css"

const API_URL = webjson["API_URL"];

function Register() {
    const [user] = useState({});
    const form = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(form.current);
        fetch(API_URL + "user/register", { "method": "POST", body: data }).
            then(res => res.json())
            .then(json => console.log(json));
    }

    return <section className="py-4 bg-gradient row d-flex justify-content-center align-items-center h-100" >
        <div className="col-md-6 col-lg-4 col-sm-10 rounded bg-white shadow p-3">
            <p className="text-center h2 fw-bold my-3 mx-1 mx-md-4 text-primary">Register</p>

            <form className="mx-1 mx-md-4" ref={form} onSubmit={handleSubmit}>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa mr-2 fa-user fa-lg me-3 fa-fw text-primary"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" name="user[name]" defaultValue={user.name} placeholder="Your Name" className="form-control text-primary border border-primary" />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa mr-2 fa-envelope fa-lg me-3 fa-fw text-primary"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" name="user[email]" defaultValue={user.email} className="form-control text-primary border border-primary" placeholder="Your Email" />                                            </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa mr-2 fa-lock fa-lg me-3 fa-fw text-primary"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" name="user[password]" defaultValue={user.password} className="form-control text-primary border border-primary" placeholder="Password" />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa mr-2 fa-key fa-lg me-3 fa-fw text-primary"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" name="user[password2]" defaultValue={user.password2} className="form-control text-primary border border-primary" placeholder="Repeat Your Password" />
                    </div>
                </div>
                <div className="form-check d-flex my-2">
                    <input className="form-check-input me-2 border border-primary" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3c">
                        I agree all statements in <a className="text-primary">Terms of service</a>
                    </label>
                </div>
                <div className="d-flex justify-content-center mx-4">
                    <input type="submit" className="btn btn-primary btn text-white px-5 py-2 m-2 border border-light border-opacity-50" value={"Register"} />
                </div>
                <p className="text-center">Already have an Account? <Link to={"login"} className="text-primary text-decoration-none">Login</Link></p>

            </form>
        </div>

    </section>
}
export default Register;