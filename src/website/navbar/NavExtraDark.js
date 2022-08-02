import WEBSITE_NAME from "../tools/WebsiteName";
import icon from "../images/icon_landscape.png";
import "./Nav.css"

const navData = [
    "Rescue",
    "Donate",
    "Adopt",
    "NGO Registration",
    "Shop",
    "Hospitals",
]
const navDataRight = [
    "LOGIN",
    "SIGNUP"
]

function LinkClick() {

}
function NavLinks(props) {
    const data = props.data;
    const links = data.map((link, i) =>
        <li className="nav-item py-2" key={link + "i"}>
            <a className="nav-link" role={"button"} onClick={LinkClick}>{link}</a>
        </li>
    );
    return links;
}

function NavExtraDark() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
            <a className="navbar-brand pe-none" ><img src={icon} height="60" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <NavLinks data={navData} />
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item py-2">
                        <a className="nav-link btn btn-primary mx-1 text-white" onClick={LinkClick}>LOGIN</a>
                    </li>
                    <li className="nav-item py-2">
                        <a className="nav-link btn btn-secondary mx-1 text-white" onClick={LinkClick}>SIGNUP</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
export default NavExtraDark;