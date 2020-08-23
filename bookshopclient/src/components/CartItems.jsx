import React, { Component } from 'react' ;
import Itemcart from  './CartItem';
import axios from 'axios';


class CartItems extends Component {

    state = {
allBooks :[],


    };

    render() {
    return(
<div className="p-3 mb-2 bg-secondary text-black" >
         <div  className ="container">
       <div className ="row">
        {this.state.allBooks.map((books)=>(
            <div className="col" key ={books.id}>
                <Itemcart key ={books.id} books={books}/>
            </div>
        ))}
       </div>
       </div>
       </div>
        );
    }

async componentDidMount(){
  const { data } = await axios.get("http://localhost:5000/api/cartItems");
  console.log(data);

  let books = data.map((book)=> {
      return{
          id : book._id,
          imgUrl :book.imgUrl,
          itemCode :book.itemCode,
          itemName  :book.itemName,
          itemDisCription : book.itemDisCription,
          itemQty : book.itemQty,
          Currencytype : book.Currencytype,
          itemPrce : book.itemPrce
      };
  });
     this.setState({allBooks : books});

}

}

export default CartItems;