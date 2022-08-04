import { useRef } from "react";
import "./../user/effects.css"

function RescueForm() {
    const inputRef = useRef(null);
    const handleChange = event => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }
        event.target.value = null;

        console.log(fileObj.name);
    }
    const clickInput = () => {
        inputRef.current.click();
    }
    return <section className="py-4 bg-gradient" >
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black bg-glass border-opacity-25 border-light " >
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-white">Rescue</p>

                                    <form className="mx-1 mx-md-4">

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fa mr-2 fa-user fa-lg me-3 fa-fw text-white shadow"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example1c" placeholder="Your Name" className="form-control border border-primary text-primary shadow" />
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fa mr-2 fa-phone fa-lg me-3 fa-fw text-white shadow"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="tel" id="form3Example3c" className="form-control border border-primary text-primary shadow" placeholder="Your Phone" />                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fa mr-2 fa-paw fa-lg me-3 fa-fw text-white shadow"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="text" id="form3Example4c" className="form-control border border-primary text-primary shadow" placeholder="Breed" />
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fa mr-2 fa-address-card fa-lg me-3 fa-fw text-white shadow"></i>
                                            <div className="text-white">Address Details:</div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">

                                            <div className="row form-row">
                                                <div className="col-sm-6 my-1">
                                                    <input type="text" name="area" placeholder="Enter Area" className="form-control border border-primary text-primary shadow" required="" />
                                                </div>
                                                <div className="col-sm-6 my-1">
                                                    <input type="text" name="city" placeholder="Enter City" className="form-control border border-primary text-primary shadow" required="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">                                            <div className="row form-row">
                                            <div className="col-sm-6 my-1">
                                                <input type="text" name="state" placeholder="Enter State" className="form-control border border-primary text-primary shadow" required="" />
                                            </div>
                                            <div className="col-sm-6 my-1">
                                                <input type="text" name="postalcode" placeholder="Postal Code" className="form-control border border-primary text-primary shadow" required="" />
                                            </div>
                                        </div>
                                        </div>


                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="button" className="btn btn-primary btn-lg shadow text-white border-opacity-25 border-light">RESCUE</button>
                                        </div>

                                    </form>

                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                    <div className="d-flex flex-column">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample" />
                                        <div className="px-auto">
                                            <input type={"file"} className="d-none" onChange={handleChange} ref={inputRef} />
                                            <button type="button" className="btn btn-primary mx-auto d-block shadow text-white m-2 border-opacity-25 border-light" onClick={clickInput}>Upload Images</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default RescueForm;