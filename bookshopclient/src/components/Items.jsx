import React, { Component } from "react";
import ItemCollection from "./Item";
import axios from "axios";

class Items extends Component {
  state = {
    allBooks: [],
  };

  render() {
    return (
      <div className="p-3 mb-2 bg-secondary text-black">
        <div className="container">
          <div className="row">
            {this.state.allBooks.map((books) => (
              <div className="col" key={books.id}>
                <ItemCollection key={books.id} books={books} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
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
