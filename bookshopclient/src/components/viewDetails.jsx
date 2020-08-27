import React, { Component } from "react";
import axios from "axios";

class ItemSelect extends Component {
  state = {
    book: {},
  };
  render() {

    return (
        <table align="center">
            <tbody>
            <tr>
                <td>
                    <img src={this.state.book.imgUrl} className="card-img-top" alt="..." height="322px" width="15px" />
                </td>
                <td>
                    <div className="container" style={{ width:"50rem"}}>
                        <section id="booksellinfo">
                            <aside id="bookselldetails">
                                <h5>{this.state.book.itemName}</h5>
                                <h6>by {this.state.book.author}</h6>
                                <div>
                                    Price:
                                        <span style={{color:"red"}}>{this.state.book.itemPrice} {this.state.book.Currencytype}</span>
                                </div>
                            </aside>
                        </section>
                        <section id="bookdescription">
                            <h6>Book Description:</h6>
                            <span itemProp="articleBody">
                                {this.state.book.itemDescription}
                            </span><br/><br/>
                        </section>
                        <div>
                            <p style={{fontSize:"13px"}}>👍 : {this.state.book.likeCount} </p>
                        </div>
                    </div>  
                    
                    <div className="container" align="right">
                        <button className="btn btn-success" >Add to cart</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

    );
  }

  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:5000/api/home/${this.props.match.params.id}`
    );
    //console.log(data.itemCode);

    this.setState({ book: data });
  }
}

export default ItemSelect;
