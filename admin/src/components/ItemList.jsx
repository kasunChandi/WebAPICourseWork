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
            <div className="row">
               {this.state.allBooks.map((book) => (
                   <div className="col" key= {book.id}>
                       <ItemList key={book.id} likeCount={book.likeCount} />
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

            data.map(book => {

                return {
                    // set values which are comming from API 
                }
             })
        }
}
export default ItemList;