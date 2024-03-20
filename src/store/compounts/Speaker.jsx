import React from 'react'
import { speakerData } from '../Data/speaker'
import { Link } from 'react-router-dom'
    const fristimage=  speakerData.slice(0,5)
function Speaker() {
  return (
    <div className='Tittle'>    
  <h2>Speakers</h2>

<div className='display'>
{
  fristimage.map((iteam)=>{
    return (
      <div className="imagebox ">
      <Link to="/speaker"> <img className='image' src={iteam.image} alt="" />
      </Link>  
    </div>
    )
  })
}
</div>
</div>
  )
}

export default Speaker