import icon from "../images/landscape_icon_npd.png";
import { Link } from "react-router-dom";

const navData = [
    "Rescue",
    "Donate",
    "Adopt",
    "NGO Registration",
    "Shop",
    "Hospitals",
]

function NavLinks(props) {
    const data = props.data;
    const links = data.map((link, i) =>
        <li className="nav-item py-2" key={link + "i"}>
            <Link to={link.toLowerCase()} className="nav-link" role={"button"}>{link}</Link>
        </li>
    );
    return links;
}

function NavbarLight() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
            <Link to={"/"} className="navbar-brand" role={"button"}><img src={icon} height="60" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <NavLinks data={navData}/>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item py-2">
                        <Link to={"login"} className="nav-link btn btn-primary mx-1 text-white">LOGIN</Link>
                    </li>
                    <li className="nav-item py-2">
                        <Link to={"register"} className="nav-link btn btn-secondary mx-1 text-white">REGISTER</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
export default NavbarLight;