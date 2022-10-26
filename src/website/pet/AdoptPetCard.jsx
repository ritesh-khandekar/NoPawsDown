import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const AdoptPetCard = ({ petId, petGender, petImgSrc, petName, petAge, petBreed, petMessage, petType }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let pet_img;
    try{
        pet_img = require(`../uploads/${petImgSrc}`)
    }catch(e){
        pet_img = require(`../uploads/dugo.png`)
    }
    const linkClick = e =>{
        e.preventDefault();
        localStorage.setItem("selectedPet",JSON.stringify({ petId, petGender, petImgSrc, petName, petAge, petBreed, petMessage, petType, navigator }));
        navigate(petId)
    }
    return (
        <div className='card mb-4 flex-grow-0' style={{ width: "17rem" }}>
            <img alt='' src={pet_img} className="card-img-top" height={"300px"} />
            <div className="card-body">
                <div className="card-title text-primary">
                    <h4>{petName}</h4>
                </div>
                <div className="card-text py-2">
                    Pet Type: <b>{petType}</b> <br />
                    {/* Pet Breed: <b>{petBreed}</b> <br /> */}
                    Gender: <b>{petGender}</b> <br />
                    Age: <b>{petAge}</b>
                </div>
                <div className="card-text">
                    {petMessage}
                </div>
                <div className="text-center mt-4">
                    <button onClick={linkClick} className="btn btn-primary px-5 py-2 text-white my-2">Adopt</button>
                </div>
            </div>
        </div>
    )
}

export default AdoptPetCard