import React, { Component } from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import BillingData from "./BillingData";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";



class BillingForm extends Component {
  state = {
    // user: {},
    allItems:[],
    totalPrice: 0,
    countItem:1
   
  };

  render() {
    const { isAuthenticated, user } = this.props.auth0;
    console.log(
        this.state.allItems.map((item) => {return item.itemPrice})
    )

    return (
        <div id="center">
            <div className="cgrow">
                <div className="chcol-75">
                    <div className="chcontainer">
                        <div className="chrow">
                            <div className="chcol-50 mt-3">
                                <h4 className="custom-color">Billing Address</h4>
                                <label><i className="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname" value={user.name}/>
                                <label><i className="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email" value={user.email} />
                                <label><i className="fa fa-address-card-o"></i> Address</label>
                                <input type="text" id="address" name="address" placeholder="542 W. 15th Street"  />
                                <label><i className="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city" placeholder="New York" />
                          
                                <div className="chrow">
                                    <div className="chcol-50">
                                        <label>State</label>
                                        <input type="text" id="state" name="state" placeholder="NY" />
                                    </div>
                                    <div className="chcol-50">
                                        <label>Zip</label>
                                        <input type="text" id="zip" name="zip" placeholder="10001" />
                                    </div>
                                </div>
                            </div>       
                        </div>
                    
                    <div>
                        <h4 className="custom-color">Items
                            <span className="chprice custom-color" style={{color:"black"}}>
                                <i className="fa fa-shopping-cart"></i>
                                <b className="custom-color">{this.state. countItem}</b>
                            </span>
                        </h4>
                        <span>
                         {this.state.allItems.map((cartItems) => (
                            <BillingData 
                             key={cartItems.id} 
                             cartItems={cartItems} 
                             onRemove={() => this.removeItem(cartItems.id)}
                             />
                          ))}
                        </span>
                       <p>Total <span className="chprice " style={{color:"black"}}><h5 className="custom-color txt-bold">{this.state.totalPrice} LKR</h5></span></p>
                       <div align="right">
                          <Link onClick={() => this.userOrder(this.state.allItems)} className="btn btn-success w-100" to ={"/"} >Continue to checkout</Link>{" "}
                       </div>
                      
                    </div>
                </div>
               
            </div>
        </div>
        </div>
    );
  }

  async componentDidMount() {
    const { isAuthenticated, user } = this.props.auth0;
    let userid = user.sub;


    const { data } = await axios.get(
      `http://localhost:5000/api/home/cart/${userid}`
    );
    console.log(data);
    console.log(user);

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
    let total = 0;
    let count =0;
    this.state.allItems.forEach(item => {
        total += item.itemPrice
        count=count+1;
    });
    this.setState({totalPrice: total})
    this.setState({countItem:count})
 
    console.log("Total" + this.state.totalPrice)
  }

  async userOrder(order) {
    
    var fName = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;

    console.log(fName,email,address,city,state,zip);
    console.log(order);
    const { isAuthenticated, user } = this.props.auth0;
    let userId = user.sub;
    await axios.post('http://localhost:5000/api/home/order/' , {
            userid: userId,         
            userName:user.name,
            userEmail:user.email,
            userAddress: address,
            userCity: city,
            userState: state,
            userZip: zip,
            userOrder: order
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });

    await axios.delete(`http://localhost:5000/api/home/order/${userId}`) 
    .then(response => {
      console.log(response)
  })
  .catch(error => {
      console.log(error.response)
  });


  }
  
}

export default withAuth0(BillingForm);
