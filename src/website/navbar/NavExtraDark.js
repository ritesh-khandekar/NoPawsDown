import WEBSITE_NAME from "../tools/WebsiteName";

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

function LinkClick(){
    
}
function NavLinks(props) {
    const data = props.data;
    const links = data.map((link, i) =>
        <li className="nav-item" key={link + "i"}>
            <a className="nav-link" onClick={LinkClick}>{link}</a>
        </li>
    );
    return links;
}

function NavExtraDark(){
    return  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container px-5">
        <a className="navbar-brand" href="#!">{WEBSITE_NAME}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <NavLinks data={navData}/>
            </ul>
        </div>
    </div>
</nav>
}
export default NavExtraDark;