import React from 'react'
import { furnitureData } from '../Data/furniture'
import { Link } from 'react-router-dom'
     const fristimage=  furnitureData.slice(0,5)
function Furniture() {
  return (
    <div className='Tittle'>
        <h2>Furnitures</h2>
        <div className='display'>
      {
        fristimage.map((iteam)=>{
          return (
            <div className="imagebox ">
              <Link to="/furn">  <img className='image' src={iteam.image} alt="" /></Link>
        
          </div>
          )
        })
      }
 
      </div>
   </div>

  )
}

export default Furniture