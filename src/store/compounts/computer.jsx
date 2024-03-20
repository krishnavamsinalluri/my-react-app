import React from 'react'
import { computerData } from '../Data/computers'
import { Link } from 'react-router-dom'
    
const fristimage=computerData.slice(0,5)
function Computer() {
  return (
    <div className='Tittle'>
            <h2>Computers</h2>

        <div className='display'>
        {
            fristimage.map((iteam)=>{
                return(
                    <div className='imagebox ' >
                     <Link to="/computers">  <img className='image' src={iteam.image} alt="" /></Link>

                    </div>
                )
            })
        }
 
        </div>
   </div>
  )
}

export default Computer