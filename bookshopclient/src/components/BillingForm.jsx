import React, { Component } from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";


class BillingForm extends Component {
  state = {
    // user: {},
  };


  render() {
    const { isAuthenticated, user } = this.props.auth0;
    return (
        <div id="center">
            <div className="cgrow">
                <div className="chcol-75">
                    <div className="chcontainer">
                        <div className="chrow">
                            <div className="chcol-50">
                                <h3>Billing Address</h3>
                                <label><i className="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="John M. Doe" value={user.name}/>
                                <label><i className="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email" placeholder="john@example.com"  value={user.email} />
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
                    </div>
                </div>   

                {/* <div className="chcol-25">
                    <div className="chcontainer">
                        <h4>Cart
                            <span className="chprice" style={{color:"black"}}>
                                <i className="fa fa-shopping-cart"></i>
                                <b>4</b>
                            </span>
                        </h4>
                        <p><a href="#">Product 1</a> <span className="chprice">$15</span></p>
                        <p><a href="#">Product 2</a> <span className="chprice">$5</span></p>
                        <p><a href="#">Product 3</a> <span className="chprice">$8</span></p>
                        <p><a href="#">Product 4</a> <span className="chprice">$2</span></p>
                        <p>Total <span className="chprice" style={{color:"black"}}><b>$30</b></span></p>
                    </div>
                </div> */}
                <input type="submit" value="Continue to checkout" className="chbtn"></input>
                <button onClick={() => this.userOrder()} className="btn btn-success" >Continue to checkout</button>{" "}
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
  }

  async userOrder() {
    var fName = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;

    console.log(fName,email,address,city,state,zip);
    const { isAuthenticated, user } = this.props.auth0;
    await axios.post('http://localhost:5000/api/home/order/' , {
        userid: '985300500V',
            // userName:User.userName,
            // userEmail: User.userEmail,
            // userAddress: User.userAddress,
            // userCity: User.userCity,
            // userState: User.userState,
            // userZip: User.userZip,
            userName:user.name,
            userEmail:user.email,
            userAddress: address,
            userCity: city,
            userState: state,
            userZip: zip
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
  }
  
}

export default withAuth0(BillingForm);
