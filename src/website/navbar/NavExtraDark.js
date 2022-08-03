import WEBSITE_NAME from "../tools/WebsiteName";
import icon from "../images/landscape_icon_npd.png";
import "bootstrap/dist/js/bootstrap"
import "./Nav.css"

import Login from "../user/Login";
import Header from "./Header";
import DonatePage from './../pet/Donate';
import RescueForm from './../pet/Rescue';
import Register from './../user/Register';

const navData = [
    "Rescue",
    "Donate",
    "Adopt",
    "NGO Registration",
    "Shop",
    "Hospitals",
]
function linkClick(link,setFn){
    switch(link.toUpperCase()){
        case "DONATE":
            setFn(<DonatePage/>)
            break;
        case "RESCUE":
            setFn(<RescueForm/>)
            break;
        case "LOGIN":
            setFn(<Login/>)
            break;
        case "SIGNUP":
            setFn(<Register/>)
            break;
    }
}
function NavLinks(props) {
    const data = props.data;
    const setFn = props.attachFn;
    const links = data.map((link, i) =>
        <li className="nav-item py-2" key={link + "i"}>
            <a className="nav-link" role={"button"} onClick={()=>linkClick(link,setFn)}>{link}</a>
        </li>
    );
    return links;
}

function NavExtraDark(props) {
    const setFn = props.attachFn;
    return <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
            <a className="navbar-brand pe-none" ><img src={icon} height="60" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <NavLinks data={navData} attachFn={setFn}/>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item py-2">
                        <a className="nav-link btn btn-primary mx-1 text-white" onClick={()=>linkClick("LOGIN",setFn)}>LOGIN</a>
                    </li>
                    <li className="nav-item py-2">
                        <a className="nav-link btn btn-secondary mx-1 text-white" onClick={()=>linkClick("SIGNUP",setFn)}>SIGNUP</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
export default NavExtraDark;