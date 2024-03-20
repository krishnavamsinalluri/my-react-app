import React, { useState } from 'react';
import { mobileData } from '../Data/mobiles';
import { Link, useNavigate } from 'react-router-dom';

function Mobilespage() {
    const navigate = useNavigate(); 

    const [selectProduct, setSelectProduct] = useState([]);
    const [data, setData] = useState(mobileData);

    function home() {
        navigate('/');
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

    function companyHandler(company) {
        if (selectProduct.includes(company)) {
            setSelectProduct(selectProduct.filter(item => item !== company));
        } else {
            setSelectProduct([...selectProduct, company]);
        }
    }

    const filteredProducts = selectProduct.length === 0 ?
        data :
        data.filter(item => selectProduct.includes(item.company));

    return (
        <>
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

                    {mobileData.map(phone => (
                        <div className="pro" key={phone.id}> {/* Added key prop */}
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
                    {filteredProducts.map(item => (
                        <div className='card w-4 m-4 p-6' key={item.id}> {/* Added key prop */}
                            <Link to={`/moblies/${item.id}`}>
                                <img width="100%" src={item.image} alt={item.model} />
                            </Link>
                            <b>{item.company}, {item.model}</b>
                            <b>$:{item.price}</b>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Mobilespage;
