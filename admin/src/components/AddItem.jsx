import React, {Component} from "react";


class AddItem extends Component
{
    render()
    {
        return (
            <div>
                <form>
                    <div className ="form-row align-items-center">
                        <div className = "form-group col-md-16">
                            <input type="text" className="form-control" placeholder="Item Code"/>      
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" placeholder="Item Name"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" placeholder="Image URL of the Item"></input>
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" placeholder="Author Name"></input>
                        </div>
                        <div className="form-group col">
                            <label>Description about the Book</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        
                        <div className="form-group col-md-16">
                            <input type="text" className="form-control" placeholder="Currency type"></input>
                        </div>
                        <div className="form-group col-md-16">
                            <input type="number" className="form-control" placeholder="Quantity"></input>
                        </div>
                        <div className="form-group col-md-16">
                            <input type="number" className="form-control" placeholder="Price"></input>
                        </div>
                        <div className="form-group col-md-16">
                            <input type="number" className="form-control" placeholder="Like Count"></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success">Save</button>
                    {" "}
                    <button className= "btn btn-primary" onClick={this.goHome}> Go to Item List</button>

                        
                </form>
            </div>

                 
            
        )
    }


    goHome = () =>
    {
        this.props.history.push("/admin/items");
    }
}
export default AddItem;