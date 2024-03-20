import React from 'react'
import { womanData } from '../Data/woman'
import { Link } from 'react-router-dom'
     const fristimage=   womanData.slice(0,5)
function Women() {
  return (
    <div className='Tittle'>
 <h2>Women</h2>

<div className='display'>
{
  fristimage.map((iteam)=>{
    return (
      <div className="imagebox ">
        <Link to="/women"><img className='image' src={iteam.image} alt="" />
        </Link>
    </div>
    )
  })
}
</div>
</div>

  )
}

export default Women