import { Link } from "react-router-dom";
import dog from "../images/dog_white_bg.jpg";
import donation_icon from "../admin/donations_icon.png"
import adoption_icon from "../admin/adoption_requests_icon.png"
import pawprint from "../admin/pawprint.png"
import { motion } from "framer-motion"
import About from "../components/About";


function Features() {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container my-4">
    <h2 className="feature-header text-center">Your Pet Adoption Journey With NoPawsDown</h2>
    <div className="row p-4">
      <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
        <img src={dog} className="img-fluid shadow-lg rounded w-75" alt="Adopt Pet dog" />
      </div>
      <div className="col-12 col-lg-6 col-md-6">
        <div class="row g-4 py-5 row-cols-1">
          <div class="col d-flex align-items-start">
            <div class="icon-square text-dark p-4 flex-shrink-0 me-3">
              <img src={donation_icon} style={{ width: "40px" }} alt="Search for Pet" />
            </div>
            <div>
              <h2>Donate</h2>
              <p>Help NGOs provide better facilities for pets</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-dark p-4 flex-shrink-0 me-3">
              <img src={adoption_icon} style={{ width: "40px" }} alt="Connect" />
            </div>
            <div>
              <h2>Adopt</h2>
              <p>Give a better life to pets through adoption</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-dark p-4 flex-shrink-0 me-3">
              <img src={pawprint} style={{ width: "40px" }} alt="Adopt a Pet" />
            </div>
            <div>
              <h2>Give Pet for Adoption</h2>
              <p>Help stray and abandoned pets by providing  shelter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <About />
    {/* <div className="container p-4">
      <h2 className="text-center">How it Works?</h2>
      <div className="row py-3">
        <div className="col-12 col-lg-4 col-md-4 text-center">
          <img src={search} className="w-25" alt="Search for Pet" />
          <h3>Search</h3>
          <p>Simply enter your city start your search</p>
        </div>
        <div className="col-12 col-lg-4 col-md-4 text-center">
          <img src={meet} className="w-25" alt="Search for Pet" />
          <h3>Meet</h3>
          <p>Schedule your appointment to meet the pet you love</p>
        </div>
        <div className="col-12 col-lg-4 col-md-4 text-center">
          <img src={cart} className="w-25" alt="Search for Pet" />
          <h3>Adopt</h3>
          <p>Finnaly adopt the dog or cat you love</p>
        </div>
      </div>
    </div> */}
  </motion.div>;
}
export default Features;