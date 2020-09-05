import React, { Component } from "react";
import axios from "axios";


class BillingForm extends Component {
  state = {
    user: {},
  };


  render() {
    return (
        <div id="center">
            <div className="cgrow">
                <div className="chcol-75">
                    <div className="chcontainer">
                        <div className="chrow">
                            <div className="chcol-50">
                                <h3>Billing Address</h3>
                                <label><i className="fa fa-user"></i> Full Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="John M. Doe" value={this.state.user.userName}/>
                                <label><i className="fa fa-envelope"></i> Email</label>
                                <input type="text" id="email" name="email" placeholder="john@example.com"  value={this.state.user.userEmail} />
                                <label><i className="fa fa-address-card-o"></i> Address</label>
                                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" value={this.state.user.userAddress} />
                                <label><i className="fa fa-institution"></i> City</label>
                                <input type="text" id="city" name="city" placeholder="New York" value={this.state.user.userCity} />

                                <div className="chrow">
                                    <div className="chcol-50">
                                        <label>State</label>
                                        <input type="text" id="state" name="state" placeholder="NY" value={this.state.user.userState} />
                                    </div>
                                    <div className="chcol-50">
                                        <label>Zip</label>
                                        <input type="text" id="zip" name="zip" placeholder="10001"value={this.state.user.userZip} />
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>   

                <div className="chcol-25">
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
                </div>
                <input type="submit" value="Continue to checkout" className="chbtn"></input>
                <button onClick={() => this.userOrder(this.state.user)} className="btn btn-success" >Continue to checkout</button>{" "}
            </div>
        </div>

    );
  }

  async userOrder(User) {

    await axios.post('http://localhost:5000/api/home/order/' , {
        userid: '985300500V',
            userName:User.userName,
            userEmail: User.userEmail,
            userAddress: User.userAddress,
            userCity: User.userCity,
            userState: User.userState,
            userZip: User.userZip,
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
  }
  
}

export default BillingForm;
