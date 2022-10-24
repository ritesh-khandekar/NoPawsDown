import React from 'react'
import AdoptPetCard from './AdoptPetCard'

const Adopt = () => {
    let AnimalInfo = [{
        petType: "Dog",
        petName: "Rockey",
        petAge: "1",
        petImgSrc: "../uploads/dugo.png",
        petBreed: "",
        petMessage: "Rockey is 1 years old and is looking for new home"
        // `${this.petName} is ${this.petAge} years old and looking for new home`
    }]
    return (
        <>
            <h2 className='text-center py-3'>Pets Available for Adoption</h2>
            {
                AnimalInfo.map(({ petAge, petName, petType, petImgSrc, petBreed, petMessage }, idx) =>
                    <AdoptPetCard key={idx} petAge={petAge} petName={petName} petImgSrc={petImgSrc} petType={petType} petBreed={petBreed} petMessage={petMessage} />
                )
            }
        </>
    )
}

export default Adopt