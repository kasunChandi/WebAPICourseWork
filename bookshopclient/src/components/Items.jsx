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
                  onLike={() => this.likeBook(books)}
                />
              </div>
            ))}
          </div>
        </div>
    );
  }

  async likeBook(books){
    
    await axios.put(`http://localhost:5000/api/home/${books.id}`, {
      likeCount: books.likeCount + 1,
    });

    let allBooks = [...this.state.allBooks];
    let index = allBooks.indexOf(books);
    allBooks[index] = {...books };
    allBooks[index].likeCount++;
    this.setState({allBooks : allBooks});
    
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
        likeCount: book.likeCount,
      };
    });
    this.setState({ allBooks: books });
  }
}

export default Items;
