import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './contex/userContex';


function Cart() {
  const { setCart, cart } = useContext(UserContext);

 

  return (
    <div className="container mt-5 cart-page">
      <h2 className='text-center mb-4 cart-container'>Shopping Cart </h2>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div className='row mb-4 mt-4 cart-item' key={item.id}>
              <div className='col-md-4 d-flex justify-content-center align-items-center'>
                <img src={item.img} className='img-thumbnail border-light' style={{ height: '200px', width: '200px' }} alt={item.title} />
              </div>

              <div className='col-md-4'>
                <h3 className='text-bold cart-title'> {item.title}</h3>
                <p className="text-body-secondary">{item.sub}</p>

                {item.offer ? (
                  <>
                    <h6>M.R.P : <span className="text-muted text-decoration-line-through">{item.g}</span></h6>
                    <h4>Price : {item.h}</h4>
                  </>
                ) : (
                  <h4>Price : {item.g}</h4>
                )}
                <p>{item.description}</p>
                <button className='btn btn-primary mb-4 '><i className="bi bi-lightning-charge-fill"></i>Buy Now</button>
              </div>
            </div>
          ))}
         
        </>
      ) : (
        <div className='text-center'>
          <h4 className='text-center mt-4'> <i className="bi bi-question-diamond-fill"></i>  No Cart items added previously? </h4>
          <Link to={"/Product"}><button className='btn btn-warning btn-lg btn-block mb-4 mt-4'>Go to Products!</button></Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
