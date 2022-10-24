import React from 'react'

const SponsorPet = () => {
    return (
        <div className="row vh-100 d-flex justify-content-center align-items-center">
            <div className="col-lg-5 col-md-6 col-sm-12 rounded shadow p-4 m-5">
                <div className="h4 text-center">Sponsor a pet Today</div>
                <div className="text-center py-3">
                    Please give some details about your pet.
                </div>
                <form action="" autoComplete='false'>
                    <div className="row m-0">
                        <div className="m-1 form-group col">
                            <input type="text" className="form-control" placeholder='Pet Name' id='pet_name' />
                        </div>
                        <div className="m-1 form-group col">
                            <input type="text" className="form-control" placeholder='Pet Type' id='pet_type' />
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="m-1 form-group col">
                            <input type="text" className="form-control" placeholder='Age' id='pet_age' />
                        </div>
                        <div className="m-1 form-group col">
                            <input type="text" className="form-control" placeholder='Breed' id='pet_breed' />
                        </div>
                    </div>
                    <div className="form-row px-3">
                        <label htmlFor="pet_pic">Photos of your pet:</label>
                        <input type="file" name="" className='form-control col' id="pet_pic" />
                    </div>
                    <div className="row p-4 py-3">
                        <textarea name="" id="" rows="5" className="form-control col" placeholder='Type a message...'></textarea>
                        <div className="form-text">Please share something about your pet.</div>
                    </div>
                    <hr />
                    <div className="row m-0">
                        <div className="m-1 form-group col">
                            <input type="text" className="form-control" placeholder='Your Name' id='pet_name' />
                        </div>
                        <div className="m-1 form-group col">
                            <input type="text" className="form-control" placeholder='Your Phone Number' id='pet_type' />
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="m-1 py-2 form-group col">
                            <input type="email" name="email" id="email" placeholder='Your email address' className='form-control' />
                        </div>
                    </div>
                    <button type="submit" className='btn btn-primary mx-3 my-2 py-2 px-5 text-white'>Send Details</button>
                </form>
            </div>
        </div>
    )
}

export default SponsorPet