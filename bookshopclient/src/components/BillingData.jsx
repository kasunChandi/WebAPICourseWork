import React, { Component } from "react";

class BillingData extends Component {
  state = {};
  render() {
    return (
      <div>
        <table className="item-tbl">
         <tbody>
         <tr>
          <td className="item-data1" width="65%" >{this.props.cartItems.itemName}</td>
          <td width="10%" className="text-center"> {this.props.cartItems.itemQty} </td>
          <td className="text-right" width="15%">{this.props.cartItems.itemPrice} {this.props.cartItems.Currencytype}</td>
         </tr>
         </tbody>
        </table>
  
      </div>
    );
  }
}
export default BillingData;
