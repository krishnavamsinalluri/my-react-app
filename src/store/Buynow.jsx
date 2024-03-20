import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Buynow() {
    var navi=useNavigate()
  var detiles=  useFormik({
        initialValues:{"Name":"","PhoneNo":"","Pincode":"","Landmark":"","state":"","address":""},
        onSubmit:(values)=>{
          alert("Order Confirmed")
            console.log(values)
            
        }
    })
      function home(){
        navi("/")
      }
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Enter Delivery Address</h1>
        <form action="" onSubmit={detiles.handleSubmit} className='form shadow-lg '>
        Name : <br />
            <input type="text" name='Name' placeholder='Name' onChange={detiles.handleChange} /><br />
        Phone Number : <br />
            <input type="text" name='PhoneNo' placeholder='PhoneNo' onChange={detiles.handleChange} /><br></br>
            Pincode :<br></br>
            <input type="text" name='Pincode' placeholder='Pincode' onChange={detiles.handleChange} /><br />
            Landmark :<br></br>
           <input type="text" name='Landmark' placeholder='Landmark' onChange={detiles.handleChange} /><br />
           State :<br></br>
           <input type="text" name='state' placeholder='State' onChange={detiles.handleChange} /><br />
                  
                  Address :<br></br>
                  <input type="text" name='address' placeholder='Address' onChange={detiles.handleChange} /><br />

                <button className="btn btn-success" >Place order</button>
                <br /><br />
                <button className="btn btn-warning" onClick={()=>{home()}}>Continue Shopping</button>

        </form>
    </div>
  )
}

export default Buynow