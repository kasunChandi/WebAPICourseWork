import React, { Component } from "react"


class CartItem extends Component{

    state = {};

    render(){

        return (
           
          
        <div className="card" style={{width: "15rem" }}>
  <img src={this.props.books.imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
        <h5 className="card-title">{this.props.books.itemName}</h5>
        <p className="card-text">{this.props.books.itemPrce}{" "}{ this.props.books.Currencytype}</p>
    <button className="btn btn-primary">♥</button> {"          "}
    
    <a href="http://localhost:3000/second.html" className="btn btn-primary" > view Details</a> 
    <div align = "right">   
    <button className="btn btn-success"> Add to Cart</button>
    </div>
    </div>
  </div>)
    }

}

export default CartItem;