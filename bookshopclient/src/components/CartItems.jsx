import React, { Component } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import { withAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

class CartItems extends Component {
  state = {
    allItems: [],
  };

  render() {
    return (
      <div className="container items-container">
        <div className="row">
            <table className="item-tbl">
              <thead>
                <tr>
                  <td>Book Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Sub Total</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {this.state.allItems.map((cartItems) => (
                  <CartItem 
                    key={cartItems.id} 
                    cartItems={cartItems} 
                    onRemove={() => this.removeItem(cartItems.id)}
                  />
                ))}
              </tbody>
              <tbody>
                <tr>
                  <td>Full Amount</td>
                  <td></td>
                  <td></td>
                  <td>3000 LKR</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
        </div>
        <div align="right">
          <Link className="btn btn-info" to='/billingform'>Checkout</Link>
        </div>
      </div>
    );
  }

  async removeItem(itemtobedeleteid){
    let newItems = this.state.allItems.filter(
      (cartItems) => cartItems.id !== itemtobedeleteid
    );
    await axios.delete(`http://localhost:5000/api/home/cart/${itemtobedeleteid}`
    );
    this.setState({ allItems: newItems });
  }

  async componentDidMount() {
    const { isAuthenticated, user } = this.props.auth0;
    let userid = user.sub;

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

export default withAuth0(CartItems);
