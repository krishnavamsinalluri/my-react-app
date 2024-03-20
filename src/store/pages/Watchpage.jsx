import React,{useState} from 'react'
import { watchData } from '../Data/watch'
import { Link, useNavigate } from 'react-router-dom'
function Watchpage() {
    var navi=useNavigate()
    const [selectProduct, setSelectProduct] = useState([]);
    const [data, setData] = useState(watchData);

    function home() {
        navi('/');
    }

    function low() {
        const sortedData = [...data].sort((a, b) => a.price - b.price);
        setData(sortedData);
    }

    function high() {
        const sortedData = [...data].sort((a, b) => b.price - a.price);
        setData(sortedData);
    }

    function sea() {
        const u = document.getElementById("se").value;
        const search = data.filter((c) =>{ return(c.category.toUpperCase().startsWith(u))});
        setData([...search]);
    }




    function companyHandler(category) {
        if (selectProduct.includes(category)) {
            setSelectProduct(selectProduct.filter(item => item !== category));
        } else {
            setSelectProduct([...selectProduct,category]);
        }
    }

    const filteredProducts = selectProduct.length === 0 ?
        data :
        data.filter(item => selectProduct.includes(item.category));


  return (
    <div>
                    <div>
                <nav className="navbar bg-primary">
                    <div className="container-fluid">
                        <h3 className="navbar-brand mb-0 h1 bi bi-house-fill" onClick={home}>Home</h3>
                        <b className="navbar-brand mb-0" onClick={high}>High to Low</b>
                        <b className="navbar-brand mb-0" onClick={low}>Low to High</b>
                        <input type="search" placeholder="Search..." aria-label="Search" onChange={sea} id='se'/>
                        <h3 className="navbar-brand bi bi-cart-dash-fill">Cart</h3>
                    </div>
                </nav>
            </div>

         <div className='fullpage'>

            
            <div className='select' >
            <h1>Filter</h1>

                    {watchData.map(phone => (
                        <div className="pro" key={phone.category}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectProduct.includes(phone.category)}
                                    onChange={() => companyHandler(phone.category)}
                                />
                                {phone.category}
                                    </label>
                        </div>
                    ))}
                </div>

        
            <div className='pagesection'>
        {
            filteredProducts.map((iteams)=>{
                return(
                    <div className='card w-4 m-4 p-6'>
                        <Link to={`/watch/${iteams.id}`}>  <img width={"200px"} src={iteams.image} alt="" /></Link>
                        <b>{iteams.model}</b>
                        <b>$:{iteams.price}</b>

                    </div>
                )
            })
        }
        </div>
   

            </div>
    </div>
  )
}

export default Watchpage