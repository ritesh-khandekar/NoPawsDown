import { Link } from "react-router-dom";
import './Header.css'
import Features from "./Features";

function Header() {
    return <>
        <header className="vh-100 py-5 bg-image-home d-flex justify-content-center align-items-center">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center my-5">
                            <h1 className="display-5 fw-bolder text-white mb-2">Create <b className="text-white">Happiness</b>, Save <b className="text-white">Lives</b></h1>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center mb-5">
                                <Link to={"donate"} className="btn shadow-lg btn-primary border border-white btn-lg px-4 me-sm-3 m-1 text-white" >Donate</Link>
                                <Link to={"adopt"} className="btn shadow-lg btn-outline-primary btn-lg px-4 m-1 bg-white" >Adopt</Link>
                            </div>
                            <Link to={"sponsor"} className="btn shadow-lg btn-outline-primary bg-white border border-white btn px-5 mt-5" >Sponsor a pet Today</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <Features /> */}
    </>
}
export default Header;