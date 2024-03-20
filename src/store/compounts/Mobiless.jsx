import React from 'react'
import { mobileData } from '../Data/mobiles'
import { Link } from 'react-router-dom'
 

function Mobiless() {
  const fristimage=mobileData.slice(0,5)
  return (
    <div className='Tittle'>
           <h2>Mobiles</h2>

      <div className='display'>
      {
        fristimage.map((iteam)=>{
          return (
            <div className="imagebox ">
                <Link to="/moblies">        <img className='image' src={iteam.image} alt="" /></Link>
          </div>
          )
        })
      }
 
      </div>
   </div>
  )
}

export default Mobiless