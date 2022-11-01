import React from 'react'

const Loader = () => {
  return (
    <div className='vh-100 d-flex w-100 position-fixed top-0 justify-content-center align-items-center' style={{ background: "rgba(0,0,0,0.5)"}}>
        <div className="spinner-border text-white spinner-border-lg"></div>
    </div>
  )
}

export default Loader