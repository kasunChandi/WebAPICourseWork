import React, { Component } from "react";

export default function ShoppingCart(cart){
   return (
      <>
      <h1>Cart</h1>
      <div className="products">
      {   cart.map((product, indx) => (
          <div className="card" style={{width:"18rem"}} key={indx}>
          <img className="card-img-top" style={{width:"7rem"}} src={product.image} alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h6>{product.author}</h6>
            <h6>{product.cost}</h6>
          </div>
         </div>
        ))}
    
      </div>
      </>
   )
   
}



//   <div className="card cart-card">
//     <div className="card-body">
//      <h5 className="card-title cart-title">Shopping Cart</h5>
//      <span className="d-flex">
//          <h6 className="item-no">2 Items </h6>
//          <img className="cart-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaiZuRiYLdTP2Faf5gv2zQvfGxaLU-_9d_-g&usqp=CAU"/>
//       </span>
//       <hr />
//      <span >
//        <p className="mb-0">Total</p>
//        <h6>LKR 2000.00</h6>
//      </span>
//     </div>  
//   </div>