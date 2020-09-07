import React, {Component} from "react";
import axios from 'axios'


class AddItem extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            itemCode        : '',
            itemName        : '',
            imgUrl          : '',
            author          : '',
            itemDescription : '',
            Currencytype    : '',
            itemQty         : '',
            itemPrice       : '',
            likeCount       : ''
            

        }
    }
    changeHandler = (e) =>
    {
        this.setState({ [e.target.name ]: e.target.value })
    }

    submitHandler = (e) =>
    {
        e.preventDefault()
        console.log(this.state)

        axios.post("http://localhost:5000/api/admin/items",this.state)
            .then( Response =>
                {
                    console.log(Response)
                })
            .catch( error =>
                {
                    console.log(console.error)
                })
    }

    render(){

        const{itemCode,itemName,imgUrl,author,itemDescription,Currencytype,itemQty,itemPrice,likeCount} =this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className ="form-row align-items-center">
                        <div className = "form-group col-md-16">
                            <label>Item Code :</label>
                            <input type="text" className="form-control" name="itemCode" value={itemCode} onChange={this.changeHandler} />      
                        </div>
                        <div className="form-group col-md-6">
                            <label>Item Name :</label>
                            <input type="text" className="form-control" name="itemName" value={itemName} onChange={this.changeHandler}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Image URL of the Item :</label>
                            <input type="text" className="form-control" name="imgUrl" value={imgUrl} onChange={this.changeHandler}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Author :</label>
                            <input type="text" className="form-control" name="author" value={author} onChange={this.changeHandler}/>
                        </div>
                        <div className="form-group col">
                        <label>Item Description :</label>
                        <textarea className="form-control" name= "itemDescription" rows="5" value={itemDescription} onChange={this.changeHandler}/>
                        </div>
                        
                        <div className="form-group col-md-16">
                            <label>Currency Type :</label>
                            <input type="text" className="form-control" name="Currencytype" value={Currencytype} onChange={this.changeHandler}/>
                        </div>
                        <div className="form-group col-md-16">
                            <label>Quantity :</label>
                            <input type="number" className="form-control" name="itemQty" value={itemQty} onChange={this.changeHandler}/>
                        </div>
                        <div className="form-group col-md-16">
                            <label>Price :</label>
                            <input type="text" className="form-control" name="itemPrice" value={itemPrice} onChange={this.changeHandler}/>
                        </div>
                        <div className="form-group col-md-16">
                            <label>Like Count :</label>
                            <input className="form-control" id="disabledInput" name="likeCount" placeholder="0" disabled  value={likeCount} onChange={this.changeHandler}/>
                        </div>
                        
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success">Save</button>
                        {" "}
                        <button className= "btn btn-primary" onClick={this.goHome}> Back to Item List</button> 
                    </div>
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