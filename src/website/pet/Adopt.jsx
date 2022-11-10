import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdoptPetCard from './AdoptPetCard'
import { getpets } from '../actions/pets'
import { useState } from 'react'
import Loader from '../components/Loader'
import { useEffect } from 'react'
import PleaseLogin from '../components/PleaseLogin'

const Adopt = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [AnimalInfo, setAnimalInfo] = useState([])
    const [isProgress, setIsProgress] = useState(true)
    const [notLogin, setnotLogin] = useState(false)

    const isLogin  = !!localStorage.getItem("Profile")

    
    useEffect(() => {
        dispatch(getpets(setIsProgress, setAnimalInfo, isLogin, setnotLogin))
    }, [])
    // let AnimalInfo = [{
    //     petType: "Dog",
    //     petName: "Rockey",
    //     petAge: "1 year",
    //     petImgSrc: "rockey.jpg",
    //     petBreed: "Lab",
    //     petGender: "Male",
    //     petMessage: "Rockey is 1 year old and is looking for a new home"
    // },{
    //     petType: "Dog",
    //     petName: "Gizmo",
    //     petAge: "1 year",
    //     petImgSrc: "gizmo.jpg",
    //     petBreed: "Lab",
    //     petGender: "Male",
    //     petMessage: "Gizmo is 1 year old and is looking for a new home"
    // },{
    //     petType: "Dog",
    //     petName: "Feisty",
    //     petAge: "1 year",
    //     petImgSrc: "feisty.jpg",
    //     petBreed: "Lab",
    //     petGender: "Female",
    //     petMessage: "Feisty is 1 year old and is looking for a new home"
    // },{
    //     petType: "Dog",
    //     petName: "Scooby",
    //     petAge: "1 year",
    //     petImgSrc: "scooby.jpg",
    //     petBreed: "Lab",
    //     petGender: "Male",
    //     petMessage: "Scooby is 1 year old and is looking for a new home"
    // }]
    return (
        <>
            {
                notLogin?
                <PleaseLogin LoginText={"Please Login"} />
                :
                (isProgress ?
                    <Loader /> :
                    <>
                        <h2 className='text-center py-3 text-black'>Pets Available for Adoption</h2>
                        <div className="container d-flex justify-content-evenly flex-wrap">
                            {
                                AnimalInfo.petslist.map(({ petAge, petGender, PetName, petType, cropData, petWeight, petMessage, _id }, idx) =>
                                    <AdoptPetCard key={idx} petAge={petAge} PetName={PetName} petGender={petGender} petId={_id} petWeight={petWeight} cropData={cropData} petType={petType} petMessage={petMessage} navigator={navigate} />
                                )
                            }
                        </div>
                    </>)
            }
        </>
    )
}

export default Adopt