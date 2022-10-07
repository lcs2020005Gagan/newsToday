import React from 'react'

function Spinner() {
  return (
    <div className="text-center verticle-center my-5" >
        <img src={require('./loading.gif')} alt="" />
        {/* <h1>LOADING</h1> */}
    </div>
  )
}

export default Spinner