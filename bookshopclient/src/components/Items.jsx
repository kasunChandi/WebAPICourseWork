import React, { Component } from "react";
import ItemCollection from "./Item";
import axios from "axios";

class Items extends Component {
  state = {
    allBooks: [],
    result: []
  };

  render() {
    return (
        <div className="container"  >
          <div className="row" >
            {this.state.allBooks.map((books) => (
              <div className="col" key={books.id}>
                <ItemCollection 
                  key={books.id} 
                  books={books}
                  onView={() => this.viewData(books)}
                />
              </div>
            ))}
          </div>
        </div>
    );
  }

  async viewData(books){
    await axios.get(`http://localhost:5000/api/home/${books.id}`);
  }

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:5000/api/home");
    console.log(data);

    let books = data.map((book) => {
      return {
        id: book._id,
        imgUrl: book.imgUrl,
        itemCode: book.itemCode,
        itemName: book.itemName,
        author: book.author,
        itemDescription: book.itemDescription,
        itemQty: book.itemQty,
        Currencytype: book.Currencytype,
        itemPrice: book.itemPrice,
      };
    });
    this.setState({ allBooks: books });
  }
}

export default Items;
