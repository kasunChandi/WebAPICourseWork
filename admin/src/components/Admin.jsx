import React, {Component} from "react";

class admin extends Component
{
    state = {
      itemId : this.props.book.id,
    };

    render()
    {
        return (  
          <div className="card" style={{width: "20rem"}}>
          <img src={this.props.book.imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{this.props.book.itemName}</h5>
            <h6>ItemCode : {this.props.book.itemCode}</h6>
            <h6>Price : Rs.{this.props.book.itemPrice}</h6>
            <h6>Available Quantity : {this.props.book.itemQty} </h6>
            <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">Update</button>
                    <button type="button" className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
        
       
        )
    }
}
export default admin;   