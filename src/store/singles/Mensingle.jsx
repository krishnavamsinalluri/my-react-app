import React from 'react'
import { useCart } from '../context/Cartcontext'
import { menData } from '../Data/men'
import { useParams } from 'react-router-dom'
import Navbar from '../compounts/Navbar'

function Mensingle() {
  var {addtoCart,cartitem}=useCart()
    console.log(cartitem)
    var {id} = useParams()
    var product =menData.find((function(iteam){return(iteam.id===id)}))
  return (
    <div>
          <Navbar></Navbar>
                    <div className='d-flex'>
            <img width="50%"  src={product.image} alt="" />
            <div className='m-4 p-6' >
                <h3>{product.model}</h3>
                <h2>{product.price}</h2>
                <p > {product.description}</p>
                <button type="button" class="btn btn-warning" onClick={()=>{addtoCart(product)}}>Add to Cart</button>

            </div>
        </div>


    </div>
  )
}

export default Mensingle