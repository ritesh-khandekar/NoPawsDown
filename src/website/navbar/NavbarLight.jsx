import icon from "../images/landscape_icon_npd.png";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import { setCurrentUser } from "../actions/currentUser";
import { useEffect } from "react";
import { motion } from "framer-motion"

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';

const navData = [
    // { "link": "About Us", "url": "about" },
    // { "link": "NGO Login", "url": "ngo/login" },
    // { "link": "NGO Register", "url": "ngo/register" },
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

    const dispatch = useDispatch()
    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate();

    let profile = JSON.parse(localStorage.getItem("Profile"))
    let login = "USER"
    if (profile) {
        profile = profile.result
        try {
            let p = profile['reviews'] > 0
            login = p ? "NGO" : login
        } catch (e) {
        }
        try {
            let p = profile['type'].length > 0
            login = p ? "ADMIN" : login
        } catch (e) {
        }
    }

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token
        if (token) {
            const decodedToken = decode(token)
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [User?.token, dispatch])

    return <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container">
            <Link to={"/"} className="navbar-brand" role={"button"}><img src={icon} height="60" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <NavLinks data={navData} />
                    {User ?
                        <>
                            {
                                login != "ADMIN" && login != "NGO" ?
                                    <>
                                        <li className="nav-item py-2">
                                            <Link to={"adopt"} className="btn btn-outline-primary mx-1">Adopt</Link>
                                        </li>
                                        <li className="nav-item py-2">
                                            <Link to={"donate"} className="btn btn-outline-secondary mx-1">Donate</Link>
                                        </li>
                                    </> : (login == "NGO" ? <>
                                        <li className="nav-item py-2">
                                            <Link to={"/ngo"} className="btn btn-outline-primary mx-1">Dashboard</Link>
                                        </li>
                                    </> : <>
                                        <li className="nav-item py-2">
                                            <Link to={"/admin"} className="btn btn-outline-primary mx-1">Admin Dashboard</Link>
                                        </li>
                                        <li className="nav-item py-2">
                                            <Link to={"/logout"} className="btn btn-outline-danger mx-1">Logout</Link>
                                        </li>
                                    </>)
                            }

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

                            {
                                login == "ADMIN" ?
                                    <li className="nav-item py-2">
                                        <div className="nav-link bg-primary px-3 rounded-5 mx-1 text-white"><b>Admin</b></div>
                                    </li> :
                                    <>
                                        <li className="nav-item py-2">
                                            <Link to={login == "NGO" ? "ngo" : (login == "ADMIN" ? "admin" : "")} className="nav-link bg-primary px-3 rounded-5 mx-1 text-white">{User.result.name.charAt(0).toUpperCase()}</Link>
                                        </li>
                                        <li className="nav-item py-2">
                                            <Link to={"/logout"} className="btn btn-outline-danger mx-1">Logout</Link>
                                        </li>
                                    </>
                            }
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
        </motion.div>
    </nav>
}
export default NavbarLight;