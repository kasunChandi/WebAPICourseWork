import React, { Component } from 'react' ;

class Aboutus extends Component {
    
    state ={};

    render(){
        return (
           <div>
              <table>
                   <tbody>
<tr> 
<div>
<h2 class="btn btn-warning">Our new Online bookstore</h2>
    <td>
       <p>Luminex Book Shop Online bookstore is a website for an extensive collection of books, stationery and magazines. 
      Not only a “one-stop shop” for book lovers but also an interactive and innovative
      destination designed to make it fun and exciting to discover and shop for new books and gifts online.</p>

 <h2 class="btn btn-warning"> Our Goals</h2>
  <p>   The Corporate goals of Luminex Book Shop as a social oriented service organization upholding social values 
    are to consolidate its present operations with market penetration and development, product development and  diversification and look out for joint ventures establishing forward and backward linkages.
 </p>
 </td>
 <td>
 <img src="https://static1.bigstockphoto.com/9/3/3/large2/339429709.jpg"  className="card-img-top" alt="..." height="200px" width="100px" />
 </td>
  </div>
</tr>
<tr>
<div>             
    <h2 class="btn btn-warning">Our Dream</h2>
 <p> Build knowledge full society in Sri Lanka....</p>
</div>
</tr>
 </tbody>
  </table>
  <div className="chart-view">
    <img src="https://quickchart.io/chart?c={type:'pie',data:{labels:['June','July', 'August','September'], datasets:[{data:[10,47,35,80]}]}}" width='500px' height='300px'/>
    <span>User Hits</span>
  </div>
</div>

        )
    }

}


export default Aboutus;