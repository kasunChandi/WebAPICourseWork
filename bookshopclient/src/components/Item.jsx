import React, { Component } from "react";

class Item extends Component {
  state = {};

  render() {
    return (
      <div className="card" style={{ width: "10rem" }}>
        {/*<a href="http://localhost:3000/Details.html" onClick={this.props.onView}>*/}
        <img src={this.props.books.imgUrl} className="card-img-top" alt="..." height="200px" width="10px" />

        <div className="card-body" >
          <h5 className="card-title">{this.props.books.itemName}</h5>
          <h6>{this.props.books.author}</h6>
          <p className="card-text">
            {this.props.books.itemPrice} {this.props.books.Currencytype}
          </p>
          {/*<button className="btn btn-primary">♥</button>{" "}
*/}
          <a
            href="http://localhost:3000/Details.html"
            className="btn btn-primary"
            onClick={this.props.onView}
          >
            view Details
          </a>
          
         {/* <div align="left">
            <button className="btn btn-success"> Add to Cart</button>
    </div> */}
        </div>
      </div>
    );
  }

}

export default Item;
