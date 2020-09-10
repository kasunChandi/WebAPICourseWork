import React, { Component } from "react";

class Search extends Component {
  state = {
    book:{},
  }

  constructor(props)
    {
      super(props);
      this.state = {value: ''};
      this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
    }

  addValue(evt){
    evt.preventDefault();
    if(this.state.value !== undefined){
      console.log(this.state.value);
    }
  }
  updateInput(evt){
    this.state={value: evt.target.value};
  }

  render() {
    
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button className="btn btn-outline-secondary" onClick={this.addValue}>
                    Search
                </button>
            </div>
            <input type="text" className="form-control" name="title" placeholder="Search books " 
              aria-label="Example text with button addon" aria-describedby="button-addon1"
              onChange={this.updateInput}
            />
        </div>
    );
  }  
}

export default Search;
