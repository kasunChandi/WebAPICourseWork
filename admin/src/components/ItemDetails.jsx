import React, {Component} from "react";

class ItemDetails extends Component 
{
    state ={};
    render()
    {
        return(
            <div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div className="modal-body">
        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                     </div>
                    </div>
                </div>
            </div>
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
*/
       
    }
    
}
export default ItemDetails;