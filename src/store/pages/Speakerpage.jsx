import React, { useState } from 'react';
import { speakerData } from '../Data/speaker';
import { Link, useNavigate } from 'react-router-dom';

function Speakerpage() {
    var navi = useNavigate();
    const [selectProduct, setSelectProduct] = useState([]);
    const [data, setData] = useState(speakerData);

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
        var letter = document.getElementById("se").value;
        var search = data.filter((c) => {
            return (c.model.toUpperCase().startsWith(letter));
        });
        setData([...search]);
    }

    function companyHandler(model) {
        if (selectProduct.includes(model)) {
            setSelectProduct(selectProduct.filter(item => item !== model));
        } else {
            setSelectProduct([...selectProduct, model]);
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
                        <input type="search" placeholder="Search..." aria-label="Search" onChange={sea} id='se' />
                        <h3 className="navbar-brand bi bi-cart-dash-fill">Cart</h3>
                    </div>
                </nav>
            </div>

            <div className='fullpage'>
                <div className='select' >
                    {data.map(phone => (
                        <div className="pro" key={phone.id}>
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
                        filteredProducts.map((iteams) => {
                            return (
                                <div className='card w-100 m-4 p-6' key={iteams.id}>
                                    <Link to={`/speaker/${iteams.id}`}> <img width={"200px"} src={iteams.image} alt="" /></Link>
                                    <b>{iteams.model}</b>
                                    <b>{iteams.company}</b>
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

export default Speakerpage;
