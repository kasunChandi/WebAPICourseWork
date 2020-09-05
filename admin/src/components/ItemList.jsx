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
            <div className="col">
               {this.state.allBooks.map((book) => (
                   <div className="row" key= {book.id}>
                       <Admin key={book.id} book = {book} />
                   </div>
               ))}   
            </div>

        </div>
        )
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