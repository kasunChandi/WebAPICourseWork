import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  state = {};

  render() {
    return (
      <div className="card" style={{ width: "13rem" ,height: "30rem"}}>
        <Link className="btn btn-primary" to={`/viewDetails/${this.props.books.id}`} >
          <img src={this.props.books.imgUrl} className="card-img-top" alt="..." height="250px" width="10px" />
        </Link>
        <div className="card-body" >
          <h5 className="card-title">{this.props.books.itemName}</h5>
          <h6>{this.props.books.author}</h6>
          <p className="card-text">
            {this.props.books.itemPrice} {this.props.books.Currencytype}
          </p>
          <button className="btn btn-primary">♥</button>{" "}
        </div>
      </div>
    );
  }

}

export default Item;
