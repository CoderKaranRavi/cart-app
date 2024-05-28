import React, { useContext, useState } from 'react'
import UserContext from './contex/userContex'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { getValue } from '@testing-library/user-event/dist/utils';
import Footer from './Footer';

function Product() {

  const {details,setCart,cart}=useContext(UserContext);

const [addcart,setAddCart]=useState([]);


const handleCart = (detail) => {
  if(!cart.some((char)=>char.id===detail.id)){
    setCart((prevCart) => {
  
      const updatedCart = [...prevCart, detail];
     setAddCart((prevAddCart)=>[...prevAddCart,detail.id])
    
      return updatedCart;
    });
  }


};



  return (<>
  <div className='container mt-5 product-conatiner'>
   
    <div className='row mt-4 product-row'>
    
    {
     details.map((item)=>{

        return     <div className='col-md-3 mb-5' key={item.id}>
        <div class="card text-center border-light" style={{width : "18rem",height:"500px"}}>
        <img src={item.img} className="card-img-top display-center mx-auto d-block mt-2" style={{height:"170px",width:"170px"}} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="text-body-secondary">{item.sub}
</p>
<h6 className="fw-light">{item.description}</h6>
  { item.offer ? <>
                  {item.rating && ( <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                  )}

                  <div className="feature-details justify-content-center">
                    <span className="text-muted text-decoration-line-through">{item.g}</span>&ensp;
                    <h4>{item.h}</h4>
                  </div>
                  </> :

                  <>
                   
                    {item.rating && (
                      <div className="d-flex justify-content-center small text-warning mb-2" >
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                      </div>
                    )}

                    <h4 > {item.g}</h4>
                  </>
              }

              {
                addcart.includes(item.id)?   <button class="btn btn-info text-white mt-2 mb-2">
                <i class="bi bi-bag-check"></i> See Buying Options
              </button>  : 
               <button class="btn btn-warning text-white mt-2 mb-2" onClick={()=>{handleCart(item)} }>
                 <i class="bi bi-cart-fill"></i>    Add to cart</button>
      
              }
            
  </div>
      </div>
      </div>
      })
    }
 
    </div>
    
     </div>
     <Footer></Footer>
     </>
  )
}

export default Product