import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";


class viewDetails extends Component {
   
    state = {
        book: {},
    };

    // componentWillMount(){
    //     this.itemData = JSON.parse(localStorage.getItem('item'));
    // }
    // componentWillUpdate(nextProps, nextState){
    //     localStorage.setItem('item', JSON.stringify(nextState));
    // }    

  render() {
    
    return (
        <table align="center">
            <tbody>
            <tr>
                <td>
                    <img src={this.state.book.imgUrl} className="card-img-top" alt="..." height="322px" width="15px" />
                </td>
                <td>
                    <div className="container" style={{ width:"50rem"}}>
                        <section id="booksellinfo">
                            <aside id="bookselldetails">
                                <h5>{this.state.book.itemName}</h5>
                                <h6>by {this.state.book.author}</h6>
                                <div>
                                    Price:
                                        <span style={{color:"red"}}>{this.state.book.itemPrice} {this.state.book.Currencytype}</span>
                                </div>
                            </aside>
                        </section>
                        <section id="bookdescription">
                            <h6>Book Description:</h6>
                            <span itemProp="articleBody">
                                {this.state.book.itemDescription}
                            </span><br/><br/>
                        </section>
                        <div>
                            <p style={{fontSize:"13px"}}>👍 : {this.state.book.likeCount} </p>
                        </div>
                    </div>  
                    
                    <div className="container" align="right">
                        <button onClick={() => this.addToCart(this.state.book)} className="btn btn-success" >Add to cart</button>{" "}
                        <Link className="btn btn-secondary"   to="/">Go Back </Link>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    );
  }

  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:5000/api/home/${this.props.match.params.id}`
    );
    //console.log(data.itemCode);
    
    this.setState({ book: data });
   
  }

  async addToCart(Item) {
    const { isAuthenticated, user } = this.props.auth0;
    if(!isAuthenticated){
        alert("You need to login to system");

    }
    else{
        console.log(user);
        // console.log(user.sub);
        // console.log(isAuthenticated);

    await axios.post('http://localhost:5000/api/home/cart/' , {
        userid: user.sub,
        itemCode: Item.itemCode,
        itemName: Item.itemName,
        itemPrice: Item.itemPrice,
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
  }
}
}

export default withAuth0(viewDetails);
