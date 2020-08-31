import React, { Component } from 'react' ;
import { useAuth0 } from '@auth0/auth0-react';

const Checkout = () =>{

    const { user } = useAuth0();
  //  let userData =  user.map(userDataset)
    return(
        <div>
            {JSON.stringify(user , null , 2)}
        </div>
    )

}


export default Checkout;