import icon from "../images/landscape_icon_npd.png";
import { Link } from "react-router-dom";
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';

const navData = [
    { "link": "About Us", "url": "about" },
    // "Donate",
    // "Adopt",
    // "NGO Registration",
    // "Shop",
    // "Hospitals",
]

function NavLinks(props) {
    const data = props.data;
    const links = data.map(({ link, url }, i) =>
        <li className="nav-item py-2 me-5" key={link + "i"}>
            <Link to={url} className="nav-link" role={"button"}>{link}</Link>
        </li>
    );
    return links;
}

function NavbarLight() {
    // const User = {
    //     firstname: "Ritesh"
    // };
    const User = null;
    return <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
            <Link to={"/"} className="navbar-brand" role={"button"}><img src={icon} height="60" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <NavLinks data={navData} />
                    {User ?
                        <>
                            <li className="nav-item py-2">
                                <Link to={"adopt"} className="btn btn-outline-primary mx-1">Adopt</Link>
                            </li>
                            <li className="nav-item py-2">
                                <Link to={"donate"} className="btn btn-outline-secondary mx-1">Donate</Link>
                            </li>

                            {/* <li class="nav-item dropdown">
                            <Link class="nav-link bg-primary px-3 rounded-5 mx-1 text-white" id="navbarDarkDropdownMenuLink" to={""} data-bs-toggle="dropdown" aria-expanded="false">
                            {User.firstname.charAt(0)}
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                            <li className="nav-item py-2">
                                <Link to={"user"} className="nav-link bg-primary px-3 rounded-5 mx-1 text-white">{User.firstname.charAt(0)}</Link>
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item py-2">
                                <Link to={"login"} className="nav-link btn btn-primary mx-1 text-white">LOGIN</Link>
                            </li>
                            <li className="nav-item py-2">
                                <Link to={"register"} className="nav-link btn btn-secondary mx-1 text-white">REGISTER</Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </div>
    </nav>
}
export default NavbarLight;