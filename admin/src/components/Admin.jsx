import React, {Component} from "react";

class admin extends Component
{
    state = {};

    render()
    {
        return (  
          <div className="card" style={{width: "18rem"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Book Title</h5>
            <h6>ItemCode</h6>
            <h6>Price</h6>
            <h6>Available Quantity</h6>
            <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-secondary">Update</button>
                  <button type="button" className="btn btn-secondary">Delete</button>
            </div>
          </div>
        </div>
       
        )
    }
}
export default admin;   