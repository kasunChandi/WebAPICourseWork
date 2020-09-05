import React, { Component } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import BillingForm from "./BillingForm";
import { Link } from "react-router-dom";

class CartItems extends Component {
  state = {
    allItems: [],
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <table className="item-tbl">
              <thead>
                <tr>
                  <td>Book Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Sub Total</td>
                </tr>
              </thead>
              <tbody>
                {this.state.allItems.map((cartItems) => (
                  <CartItem key={cartItems.id} cartItems={cartItems} />
                ))}
              </tbody>
              <tbody>
                <tr>
                  <td>Full Amount</td>
                  <td></td>
                  <td></td>
                  <td>3000 LKR</td>
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
        <div align="right">
          <Link className="btn btn-info" to='/billingform'>
            Checkout
            </Link>
        </div>
      </div>
    );
  }
  async componentDidMount() {
    let userid = "985300500V";

    const { data } = await axios.get(
      `http://localhost:5000/api/home/cart/${userid}`
    );
    console.log(data);

    let cartItems = data.map((cartItem) => {
      return {
        id: cartItem._id,
        itemCode: cartItem.itemCode,
        itemName: cartItem.itemName,
        itemQty: cartItem.itemQty,
        itemPrice: cartItem.itemPrice,
        Currencytype: cartItem.Currencytype,
      };
    });

    this.setState({ allItems: cartItems });
  }
}

export default CartItems;
