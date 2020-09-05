import React, { Component } from "react";

class BillingData extends Component {
  state = {};
  render() {
    return (
        <div>
      <tr>
        <td className="item-data1">{this.props.cartItems.itemName}</td>
        <td> {this.props.cartItems.itemQty} </td>
        <td>{this.props.cartItems.itemPrice} {this.props.cartItems.Currencytype}</td>
        
      </tr>
      </div>
    );
  }
}
export default BillingData;
