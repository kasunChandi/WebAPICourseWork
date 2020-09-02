import React, { Component } from "react";

class cartItem extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td className="item-data1">{this.props.cartItems.itemName}</td>
        <td>{this.props.cartItems.itemPrice} {this.props.cartItems.Currencytype}</td>
        <td>{this.props.cartItems.itemQty}</td>
        <td>{this.props.cartItems.itemPrice} {this.props.cartItems.Currencytype}</td>
        <td>
          <button className="btn btn-warning">Remove</button>
        </td>
      </tr>
    );
  }
}
export default cartItem;
