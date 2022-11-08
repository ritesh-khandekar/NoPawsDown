import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PleaseLogin = ({ LoginText, LoginSmallText = "", NGOLogin = false }) => {
  return (
    <div className='vh-100 d-flex w-100 position-fixed top-0 justify-content-center align-items-center' style={{ left: 0, background: "rgba(0,0,0,0.5)" }}>
      <div className="text-center bg-white p-3 rounded shadow">
        <h3 className="text-danger">{LoginText}</h3>
        <p className='p-3'>Please <Link to={NGOLogin ? "/ngo/login" : "/login"}>Login</Link> or <Link to={NGOLogin ? "/ngo/register": "/register"}>Register</Link> to continue...
          <br />
          {!!LoginSmallText ? LoginSmallText : ""}
        </p>
      </div>
    </div>
  )
}

export default PleaseLogin