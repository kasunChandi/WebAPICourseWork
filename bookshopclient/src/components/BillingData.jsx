import React, { Component } from "react";

class BillingData extends Component {
  state = {};
  render() {
    return (
      <div>
        <table className="item-tbl">
         <tbody>
         <tr>
          <td className="item-data1">{this.props.cartItems.itemName}</td>
          <td> {this.props.cartItems.itemQty} </td>
          <td className="text-right">{this.props.cartItems.itemPrice} {this.props.cartItems.Currencytype}</td>
         </tr>
         </tbody>
        </table>
  
      </div>
    );
  }
}
export default BillingData;
