import { Link } from "react-router-dom";
import dog from "../images/dog_white_bg.jpg";
import search from '../images/search.png'
import meet from '../images/meet.png'
import cart from '../images/cart.png'

function Features() {
    return <div className="container my-4">
        <h2 className="feature-header text-center">Your Pet Adoption Journey With NoPawsDown</h2>
        <div className="row p-4">
            <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
                <img src={dog} className="img-fluid w-75" alt="Adopt Pet dog" />
            </div>
            <div className="col-12 col-lg-6 col-md-6">
            <div class="row g-4 py-5 row-cols-1">
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em">
                <img src={search} className="w-25" alt="Search for Pet" />
                </svg>
              </div>
              <div>
                <h2>Search Pet</h2>
                <p>Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em"></svg>
              </div>
              <div>
                <h2>Connect</h2>
                <p>Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                <svg class="bi" width="1em" height="1em"></svg>
              </div>
              <div>
                <h2>AdoptLove</h2>
                <p>The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
              </div>
            </div>
          </div>
            </div>
        </div>
        <div className="container">
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
        </div>
    </div>;
}
export default Features;