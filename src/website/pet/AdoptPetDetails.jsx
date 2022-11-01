import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adopt } from '../actions/adopt'

const AdoptPetDetails = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { petId, PetName, cropData, petAge, petGender, petMessage, petType } = JSON.parse(localStorage.getItem("selectedPet"))
  const [isProgress, setIsProgress] = useState(false)

  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [State, setState] = useState("")
  const [City, setCity] = useState("")
  const [PinCode, setPinCode] = useState("")
  const [Apartment, setApartment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = { petId, FirstName, LastName, Email, Phone, State, City, PinCode, Apartment }
    let filledData = true;
    for (let key in data) {
      if (data[key] == null || data[key] == "") {
        filledData = false;
      }
    }
    if (!filledData) {
      alert("Please fill the required fields!")
      return;
    }
    setIsProgress(true)

    dispatch(adopt(data, navigate))
    
  }

  return <>
    <div className="h2 text-primary text-center p-4">Adopt a Pet</div>

    <>
      <div className="container">
        <div className="row d-flex g-3 justify-content-center align-items-center">
          <div className="col-lg-5 col-md-6 col-sm-12 rounded">
            <img src={cropData} className="img-fluid w-50 float-end" alt="Adopt Pet dog" />
            <div className="card-title text-primary">
              <h4>{PetName}</h4>
            </div>
            <div className="card-text py-2">
              Type: <b>{petType}</b> <br />
              Gender: <b>{petGender}</b> <br />
              Age: <b>{petAge}</b>
            </div>
            <div className="card-text">
              {petMessage}
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 shadow-sm rounded mx-5 p-4">
            <div className="text-center text-primary h4 py-2">
              Your Details
            </div>
            <>
              <form action="" onSubmit={handleSubmit} autoComplete='false'>
                <div className="row m-0">
                  <div className="m-1 form-group col">
                    <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setFirstName(e.target.value)} placeholder='Your Firstname' />
                  </div>
                  <div className="m-1 form-group col">
                    <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setLastName(e.target.value)} placeholder='Your Lastname' id='' />
                  </div>
                </div>
                <div className="row m-0">
                  <div className="m-1 form-group col">
                    <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' id='' />
                  </div>
                </div>
                <div className="row m-0">
                  <div className="m-1 form-group col">
                    <input type="email" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setEmail(e.target.value)} placeholder='Your email' id='' />
                  </div>
                </div>
                <hr />
                <div className="row m-0">
                  <div className="m-1 form-group col">
                    <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setState(e.target.value)} placeholder='State' />
                  </div>
                  <div className="m-1 form-group col">
                    <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setCity(e.target.value)} placeholder='City' id='' />
                  </div>
                </div>
                <div className="row m-0">
                  <div className="m-1 form-group col">
                    <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setPinCode(e.target.value)} placeholder='Pin code' />
                  </div>
                  <div className="m-1 form-group col">
                    <input type="text" className="form-control" disabled={isProgress ? true : false} onChange={(e) => setApartment(e.target.value)} placeholder='Apartment, Suite, etc.' id='' />
                  </div>
                </div>
                <div className="d-flex justify-content-between px-2">
                  <button type="reset" className='btn btn-outline-danger mx-3 my-2 px-4 py-2'>Reset</button>
                  <button type="submit" className='btn btn-success mx-3 px-4 py-2 my-2' disabled={isProgress ? true : false} >Send Details {isProgress ? <div className='spinner-border spinner-border-sm'></div> : ""} </button>
                </div>
              </form>
            </>
          </div>
        </div>
      </div>
    </>
  </>
}

export default AdoptPetDetails