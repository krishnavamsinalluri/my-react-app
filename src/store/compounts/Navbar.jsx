import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/Cartcontext'
function Navbar() {
  var {cartitem}=useCart()
  var navi=useNavigate()
  function home(){
    navi("/")
  }
  return (
    <div>
                    <div>
                <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <h3 class="navbar-brand mb-0 h1 bi bi-house-fill text-dark" onClick={()=>{home()}} >Home</h3>
                    <input type="search" placeholder="Search..." aria-label="Search"  ></input>
                    <h3  ><Link to="/cart">
                    <div class="navbar-brand bi bi-cart-dash-fill text-dark" > <span style={{color:"black"}}>{cartitem.length}</span></div>
                    </Link></h3>

                </div>
                </nav>
            </div>
            
    </div>

  )
}

export default Navbar