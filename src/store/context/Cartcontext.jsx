import { createContext, useContext, useState } from "react";


const Cartcontext=createContext()
  export const CartProvider=({children})=>{
    const [cartitem,setCartitem]=useState([])
    const addtoCart =(iteam)=>{
        setCartitem([...cartitem,iteam])
    }
    const removeFormCart=(iteam)=>{
        setCartitem(cartitem.filter((app)=>app!==iteam))
    }

    return(
        <Cartcontext.Provider value={{cartitem,addtoCart,removeFormCart}}>
            {children}
        </Cartcontext.Provider>)
    
}
export const useCart=()=>{
    return useContext(Cartcontext)
}