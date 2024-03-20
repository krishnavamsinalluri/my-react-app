import React from 'react'
import { menData } from '../Data/men'
import { Link } from 'react-router-dom'
      const fristimage=  menData.slice(0,5)
function Men() {
  return (
    <div className='Tittle'>
    <h2>Mens</h2>

<div className='display'>
{
  fristimage.map((iteam)=>{
    return (
      <div className="imagebox ">
        <Link to="/men">  <img className='image' src={iteam.image} alt="" /></Link>
  
    </div>
    )
  })
}
</div>
</div>
  )
}

export default Men