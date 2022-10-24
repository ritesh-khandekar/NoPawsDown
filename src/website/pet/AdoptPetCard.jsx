import React from 'react'

const AdoptPetCard = ({ petImgSrc, petName, petAge, petBreed, petMessage, petType }) => {
    console.log(petImgSrc)
    let pet_img = require(`../uploads/dugo.png`)
    return (
        <div className='card' style={{ width: "18rem" }}>
            <img alt='' src={pet_img} className="card-img-top" />
            <div className="card-body">
                <div className="card-title">
                    <h4>{petName}</h4>
                </div>
                <div className="card-text py-2">
                    Pet Type: {petType} <br />
                    Pet Breed: {petBreed} <br />
                    Age: {petAge}
                </div>
                <div className="card-text">
                    {petMessage}
                </div>
                <div className="text-center">
                    <button className="btn btn-primary px-5 py-2 text-white my-2">Adopt</button>
                </div>
            </div>
        </div>
    )
}

export default AdoptPetCard