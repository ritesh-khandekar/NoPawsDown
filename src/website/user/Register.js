import "./effects.css"
function Register() {
    return <section className="py-4 bg-gradient" >
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black bg-glass border-opacity-25 border-light " >
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">Register</p>

                                    <form className="mx-1 mx-md-4">

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fa mr-2 fa-user fa-lg me-3 fa-fw shadow text-white"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" placeholder="Your Name" className="form-control text-primary border border-primary shadow" />
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fa mr-2 fa-envelope fa-lg me-3 fa-fw shadow text-white"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="email" id="form3Example3c" className="form-control text-primary border border-primary shadow" placeholder="Your Email"/>                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fa mr-2 fa-lock fa-lg me-3 fa-fw shadow text-white"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="password" id="form3Example4c" className="form-control text-primary border border-primary shadow" placeholder="Password"/>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fa mr-2 fa-key fa-lg me-3 fa-fw shadow text-white"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="password" id="form3Example4cd" className="form-control text-primary border border-primary shadow" placeholder="Repeat Your Password" />
                                            </div>
                                        </div>

                                        <div className="form-check d-flex  mb-5">
                                            <input className="form-check-input me-2 border border-primary" type="checkbox" value="" id="form2Example3c" />
                                            <label className="form-check-label text-white" htmlFor="form2Example3c">
                                                I agree all statements in <a href="#" className="text-white">Terms of service</a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="button" className="btn btn-primary btn-lg shadow text-white border border-light border-opacity-50">REGISTER</button>
                                        </div>

                                    </form>

                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                        className="img-fluid" alt="Sample" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Register;