import React,{useState}from 'react'
import { womanData } from '../Data/woman'
import { Link, useNavigate } from 'react-router-dom'
function Womenpage() {
        var navi=useNavigate()
    const [selectProduct, setSelectProduct] = useState([]);
    const [data, setData] = useState(womanData);

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
        const search = data.filter((c) =>{ return(c.company.toUpperCase().startsWith(u))});
        setData([...search]);
    }



    function companyHandler(model) {
        if (selectProduct.includes(model)) {
            setSelectProduct(selectProduct.filter(item => item !== model));
        } else {
            setSelectProduct([...selectProduct,model]);
        }
    }

    const filteredProducts = selectProduct.length === 0 ?
        data :
        data.filter(item => selectProduct.includes(item.model));



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

                    {womanData.map(phone => (
                        <div className="pro" key={phone.model}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectProduct.includes(phone.model)}
                                    onChange={() => companyHandler(phone.model)}
                                />
                                {phone.model}
                                    </label>
                        </div>
                    ))}
                </div>

         <div className='pagesection'>
        {
            filteredProducts.map((iteams)=>{
                return(
                    <div className='card w-4 m-4 p-6'>
                        <Link to={`/women/${iteams.id}`}>  <img width={"250px"} src={iteams.image} alt="" /></Link>
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

export default Womenpage