import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const AdoptPetCard = ({ petId, petGender, petWeight, cropData, PetName, petAge, petBreed, petMessage, petType }) => {
    const navigate = useNavigate()

    const linkClick = e => {
        e.preventDefault();
        localStorage.setItem("selectedPet", JSON.stringify({ petId, petGender, cropData, PetName, petAge, petBreed, petMessage, petType, navigator }));
        navigate(petId)
    }
    return (
        <div className='card mb-4 flex-grow-0' style={{ width: "17rem" }}>
            <img alt='' src={cropData} className="card-img-top" />
            <div className="card-body">
                <div className="card-title text-primary">
                    <h4>{PetName}</h4>
                </div>
                <div className="card-text py-2">
                    Pet Type: <b>{petType}</b> <br />
                    Gender: <b>{petGender}</b> <br />
                    Age: <b>{petAge}</b> <br />
                    Weight: <b>{petWeight}</b>
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