import React from "react";
import icon from "../images/favicon.ico"
const navData = [
    "Rescue",
    "Donate",
    "Adopt",
    "NGO Registration",
    "Shop",
    "Hospitals",
    "",
    "Login",
    "Register"
]

function NavLinks(props) {
    const data = props.data;
    const links = data.map((link, i) =>
        <li className="nav-item" key={link + "i"}>
            <a className="nav-link">{link}</a>
        </li>
    );
    return links;
}

function NavigationBar() {
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 justify-content-between" >
            <a className="navbar-brand text-white">
                <img src={icon} width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
                SemV Project
            </a>
            <a className="navbar-toggler" type="a" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <NavLinks data={navData} />
                </ul>
            </div>
        </nav>
    </>
}

export default NavigationBar;