import React, { useState } from 'react';
import { computerData } from '../Data/computers';
import { Link, useNavigate } from 'react-router-dom';

function Computerpage() {
        var navi=useNavigate()
    const [selectProduct, setSelectProduct] = useState([]);
    const [data, setData] = useState(computerData); 

    function home(){
            navi('/')
    }

    function low() {
        const sortedData = [...data].sort((a, b) => a.price - b.price); 
        setData(sortedData);
    }

    function high() {
        const sortedData = [...data].sort((a, b) => b.price - a.price); // Corrected sorting logic
        setData(sortedData);
    }
    function sea(){
                    
        var u=document.getElementById("se").value;
        var search=data.filter((c)=>{
            return (c.company.toUpperCase().startsWith(u))
        })
       setData([...search]) 
    }

    function companyHandler(company) {
        if (selectProduct.includes(company)) {
            setSelectProduct(selectProduct.filter(item => item !== company));
        } else {
            setSelectProduct([...selectProduct, company]);
        }
    }

    const filteredProducts = selectProduct.length === 0 ?
        data : data.filter(item => selectProduct.includes(item.company));

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
                <div className='select'>
                <h1>Filter</h1>

                    {computerData.map(phone => (
                        <div className='pro' key={phone.company}>
                            <label>

                                <input
                                    type="checkbox"
                                    checked={selectProduct.includes(phone.company)}
                                    onChange={() => companyHandler(phone.company)}
                                />
                                {phone.company}
                            </label>
                        </div>
                    ))}
                </div>

                <div className='pagesection'>
                    {filteredProducts.map((item) => (
                        <div className='card w-4 m-4 p-6' key={item.id}>
                            <Link to={`/computers/${item.id}`}>
                                <img width="100%" src={item.image} alt="" />
                            </Link>
                            <b>{item.company}, {item.model}</b>
                            <b>{item.price}</b>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Computerpage;
