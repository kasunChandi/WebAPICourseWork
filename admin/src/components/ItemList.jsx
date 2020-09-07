import React, {Component} from "react";
import axios from "axios"
import Admin from "./Admin";

class ItemList extends Component
{
    state = {
        allBooks: [],
    };

    render()
    {
        return (
            <div className="container">
            <div className="row">
               {this.state.allBooks.map((book) => (
                   <div className="col" key= {book.id}>
                       <Admin key={book.id} 
                       book = {book} 
                       bookDelete = {()=> this.deleteItem(book.id)}
                       />
                   </div>
               ))}   
            </div>

        </div>
        )
    }

       async deleteItem(deleteItemId)
       {
            let NewItemBook =  this.state.allBooks.filter(
                (book) => book.id !=deleteItemId
            );

            await axios.delete(`http://localhost:5000/api/admin/items/${deleteItemId}`);
            this.setState({allBooks : NewItemBook});
       }

       async componentDidMount()
        {
            let {data} = await axios.get("http://localhost:5000/api/admin/items");
            console.log(data);

            let books = data.map(book => {

                return {
                    id : book._id,
                    imgUrl : book.imgUrl,
                    itemName : book.itemName,
                    itemCode : book.itemCode,
                    itemPrice : book.itemPrice,
                    itemQty : book.itemQty,
                };
             });
             this.setState({allBooks : books})
        }
}
export default ItemList;