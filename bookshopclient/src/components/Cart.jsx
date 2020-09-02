import React, { Component } from "react";

class cart extends Component{ 
   render() {

      return (
        <div className="row">
          <div className="col-md-9">
             <table className="item-tbl">
                <thead>
                   <tr>
                      <td>Item</td>
                      <td>Price</td>
                      <td>Qty</td>
                      <td>Sub Total</td>
                   </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="item-data1">
                         Book 01
                      </td>
                      <td>LKR 1500.00</td>
                      <td>2</td>
                      <td>LKR 3000.00</td>
                      <td>
                      <button className="btn btn-warning" >Recover</button>
                      </td>
                  </tr>
                  <tr>
                      <td>Book 02</td>
                      <td>LKR 1500.00</td>
                      <td>2</td>
                      <td>LKR 3000.00</td>
                  </tr>
                </tbody>
             </table>
          </div>
          <div className="col-md-3">
            <table>
               <tbody>
                  <tr>
                     <td>Shopping Cart Summary</td>
                     <td></td>
                  </tr>
                  <tr>
                     <td>Items</td>
                     <td>2</td>
                  </tr>
                  <tr>
                     <td>Discount (0%)</td>
                     <td>LKR 0.00</td>
                  </tr>
                  <tr>
                     <td>Total</td>
                     <td>LKR 3000.00</td>
                  </tr>
               </tbody>
            </table>
          </div>
         </div>
      
      );
   }
   
}

export default cart;


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