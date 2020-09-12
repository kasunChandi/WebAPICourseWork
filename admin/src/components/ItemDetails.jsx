/*import React, {Component} from "react";

class ItemDetails extends Component 
{
    state ={
        itemQty = this.props.itemQty,
    };
    render()
    {
        return(
            <div>
                <form>
                    <div className ="form-row align-items-center">
                        <div className = "form-group col-md-16">
                            <label>New Item Quantity :</label>
                            <input type="text" className="form-control" name="itemQty" value={itemQty} onChange={this.changeHandler} />      
                        </div>
                        <div className="form-group col-md-6">
                            <label>New Item Price :</label>
                            <input type="text" className="form-control" name="itemPrice" value={item} onChange={this.changeHandler}/>
                        </div>
                    </div>
                </form>
            </div>
      
      )

     /* async updateItem(book)
       {
           let NewItemBook = this.state.allBooks.filter(
               (book) => book
           )
           await axios.put(`http://localhost:5000/api/admin/items/${book.id}`,{

           itemQty: book.itemQty,
           itemPrice: book.itemPrice
           });

       
    }
    
}
export default ItemDetails;
*/