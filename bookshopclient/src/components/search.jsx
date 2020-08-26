import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  state = {
    
  }

  render() {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" onClick={document.getElementById("textis")}>
                    Search
                </button>
            </div>
            <input type="text" className="form-control" id="textis" placeholder="Search books " aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>
    );
  }
  async componentDidMount() {
    const text = document.getElementById("textis");
    console.log(text);
    // const { data } = await axios.get(
    //   `http://localhost:5000/api/home/${this.props.match.params.id}`
    // );
    // console.log(data.itemCode);
    // this.setState({ book: data });
  }
  
}

export default Search;
