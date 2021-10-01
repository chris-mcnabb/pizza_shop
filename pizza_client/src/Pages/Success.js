import React from 'react';

const PaymentSuccess = (props) =>{
    return(
        <div className="home container" >
            <h3>Thank Your for Your Order</h3>
            <h3>Order Time: {props.time}</h3>
        </div>

    )
}

export default PaymentSuccess;
