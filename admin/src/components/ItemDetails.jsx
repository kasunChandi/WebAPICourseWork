import React, {Component} from "react";

class ItemDetails extends Component
{
    render()
    {
        return (
            <div>
            <h1>DETAIL - {this.props.match.params.itemCode}</h1>
            {""}
            <button onClick={this.goHome}> Home</button>
        </div>
        )
    }
    goHome = () =>
    {
        this.props.history.push("/admin/items");
    }
}
export default ItemDetails;