import React from 'react'
import { useNavigate } from 'react-router-dom'
import AdoptPetCard from './AdoptPetCard'

const Adopt = () => {
    const navigate = useNavigate()
    let AnimalInfo = [{
        petType: "Dog",
        petName: "Rockey",
        petAge: "1 year",
        petImgSrc: "rockey.jpg",
        petBreed: "Lab",
        petGender: "Male",
        petMessage: "Rockey is 1 year old and is looking for a new home"
    },{
        petType: "Dog",
        petName: "Gizmo",
        petAge: "1 year",
        petImgSrc: "gizmo.jpg",
        petBreed: "Lab",
        petGender: "Male",
        petMessage: "Gizmo is 1 year old and is looking for a new home"
    },{
        petType: "Dog",
        petName: "Feisty",
        petAge: "1 year",
        petImgSrc: "feisty.jpg",
        petBreed: "Lab",
        petGender: "Female",
        petMessage: "Feisty is 1 year old and is looking for a new home"
    },{
        petType: "Dog",
        petName: "Scooby",
        petAge: "1 year",
        petImgSrc: "scooby.jpg",
        petBreed: "Lab",
        petGender: "Male",
        petMessage: "Scooby is 1 year old and is looking for a new home"
    }]
    return (
        <>
            <h2 className='text-center py-3 text-primary'>Pets Available for Adoption</h2>
            <div className="container d-flex justify-content-evenly flex-wrap">
            {
                AnimalInfo.map(({ petAge, petGender, petName, petType, petImgSrc, petBreed, petMessage }, idx) =>
                    <AdoptPetCard key={idx} petGender={petGender} petAge={petAge} petName={petName} petId={idx.toString()} petImgSrc={petImgSrc} petType={petType} petBreed={petBreed} petMessage={petMessage} navigator={navigate} />
                )
            }
            </div>
        </>
    )
}

export default Adopt