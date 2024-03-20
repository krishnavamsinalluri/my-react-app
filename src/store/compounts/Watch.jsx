import React from 'react'
import { watchData } from '../Data/watch'
import { Link } from 'react-router-dom'
  const fristimage= watchData.slice(0,5)
function Watch() {
  return (
    <div className='Tittle'>
    <h2>Watchs</h2>
<div className='display'>
{
    fristimage.map((iteam)=>{
        return(
            <div className='imagebox ' >
               <Link to="/watch"> <img className='image' src={iteam.image} alt="" /></Link>
            </div>
        )
    })
}

</div>

    </div>
  )
}

export default Watch