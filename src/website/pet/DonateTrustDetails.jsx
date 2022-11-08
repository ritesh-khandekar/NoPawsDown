import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { donate } from '../actions/donate';
import useRazorpay from 'react-razorpay'
import PleaseLogin from '../components/PleaseLogin'
import { useCallback } from 'react'
import { newOrderID } from '../api'


const DonateTrustDetails = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [amount, setAmount] = useState(0)
  const [disable, setdisable] = useState(false)

  let NGOData, NGOID, UserID;

  NGOData = JSON.parse(localStorage.getItem("selectedNGO"))
  NGOID = NGOData._id;
  UserID = JSON.parse(localStorage.getItem("Profile"))
  if (UserID)
    UserID = UserID.result._id

  const Razorpay = useRazorpay()

  const confirmPayment = () => {
    if(amount==0){
      alert("Please enter valid amount (1 - 99,999)")
      return
    }
    setdisable(true)
  }
  const handlePayment = useCallback(async () => {
    const order = await newOrderID({ amount })
    console.log(order)
    const options = {
      key: "rzp_test_mFMFgRDVP3SwXF",
      amount: (amount * 100),
      currency: "INR",
      name: NGOData.name,
      description: "Donation",
      order_id: order.id,
      handler: (res) => {
        console.log(res);
        let paymentID = res.razorpay_payment_id
        const data = { UserID, amount, paymentID, NGOID }
        dispatch(donate(data, navigate))
      },
      prefill: {
        name: NGOData.name,
        email: NGOData.email,
        contact: NGOData.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay, amount]);

  useEffect(() => {
    if (amount < 0) {
      setAmount(0)
    }
    if (amount > 999999) {
      setAmount(999999)
    }
  }, [amount])

  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
    {
      !!UserID ?
        <div className="container">
          <div className="header text-center p-5">
            <h3 className='text-secondary'>Change Animals life, today</h3>
            <h5>We need your help to create a better life for Animals</h5>
          </div>
          <div style={{ maxWidth: "600px" }} className="container-sm shadow p-3 py-4 text-center">
            <h3 className="text-primary">
              Make a donation
            </h3>
            <p className=''>I wish to make a donation of <b className='text-success'>₹ {amount}</b> to <b className='text-success'>{NGOData.name}</b> </p>
            <div className="text-center">
              <form onSubmit={(e) => { e.preventDefault() }}>
                <div className="p-3 d-flex justify-content-center align-items-center">
                  <div className='shadow-sm d-flex justify-content-center align-items-center'>
                    <div className="h2 rupee float-start ps-3">₹</div>
                    <input type="number" style={{ outline: "none", width: "160px" }} disabled={disable} value={amount} onChange={(e) =>{ setAmount(e.target.value)}} className='border-0 p-2 h1 active' name="" id="" placeholder='' />
                  </div>
                </div>
                <div className="p-3 text-center">
                  {
                    !disable ?
                      <button className='p-2 px-5 py-2 border-bottom border-3 shadow-sm bg-gradient text-white btn btn-lg rounded-0' onClick={confirmPayment}>Confirm</button>
                      :
                      <button className='p-2 px-5 py-2 border-bottom border-3 shadow-sm bg-success text-white btn btn-lg rounded-0' onClick={handlePayment}>Donate</button>
                  }
                </div>
              </form>
            </div>
          </div>
        </div> :
        <PleaseLogin LoginText={"Please Login"} LoginSmallText={"You must  login to donate"} />
    }
  </motion.div>
}

export default DonateTrustDetails