import React, {Component} from "react";
import axios from "axios"
import Admin from "./Admin";

class ItemList extends Component
{
    state = {
        allBooks: [
            {id: 1, ItemCode: 5},
            {id: 2, ItemCode: 10},
            {id: 3, ItemCode: 15}
        ],
    };

    render()
    {
        return (
            <div className="container">
            <div className="col">
               {this.state.allBooks.map((book) => (
                   <div className="row" key= {book.id}>
                       <Admin key={book.id} likeCount={book.likeCount} />
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