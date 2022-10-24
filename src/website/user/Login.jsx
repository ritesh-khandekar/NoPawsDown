import "./effects.css"
import { Link, NavLink } from "react-router-dom";
function Login() {
    return <section className="py-4 bg-gradient row d-flex justify-content-center align-items-center h-100" >
        <div className="col-md-6 col-lg-4 col-sm-10 rounded bg-white shadow p-3">
            <p className="text-center h2 fw-bold my-3 mx-1 mx-md-4 text-primary">Login</p>

            <form className="mx-1 mx-md-4">

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fa mr-2 fa-envelope fa-lg me-3 fa-fw text-primary"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" className="form-control border border-primary text-primary" placeholder="Your Email" />                                            </div>
                </div>

                <div className="d-flex flex-row align-items-center my-2">
                    <i className="fa mr-2 fa-lock fa-lg me-3 fa-fw text-primary"></i>
                    <div className="form-outline flex-fill">
                        <input type="password" id="form3Example4c" className="form-control border border-primary text-primary" placeholder="Password" />
                    </div>
                </div>
                <p className="text-center">
                    <label htmlFor="check">
                        <input type="checkbox" name="remember" id="check" className="mx-1" />
                        Remember Me
                    </label>
                </p>
                <div className="d-flex justify-content-center mx-4 mb-3">
                    <button type="button" className="btn btn-primary btn border-opacity-50 px-5 py-2 border border-light text-white">Login and Continue</button>
                </div>
                <p className="text-center">New to our Website? <Link to={"register"} className="text-primary text-decoration-none">Register</Link></p>
            </form>
        </div>

    </section>
}
export default Login;