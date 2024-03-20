import React from 'react'
import { mobileData } from '../Data/mobiles'
import {  useParams } from 'react-router-dom'
import { useCart } from '../context/Cartcontext'
import Navbar from '../compounts/Navbar'
function Mobliessingles() {
  var {addtoCart,cartitem}=useCart()
      console.log(cartitem)
      const id= useParams()
        const products=mobileData.find(function(iteam){
            return(iteam.id=== id)
        })
        console.log(id)
  return (
    <div>
          <Navbar></Navbar>
        <div className='d-flex'>
            <img width="50%"  src={products.image} alt="" />
            <div className='m-4 p-6' >
                <h3>{products.model}</h3>
                <h2>{products.price}</h2>
                <p > {products.description}</p>
                <button type="button" class="btn btn-warning" onClick={()=>{addtoCart(products)}}>Add to Cart</button>

            </div>
        </div>
    </div>
  )
}

export default Mobliessingles