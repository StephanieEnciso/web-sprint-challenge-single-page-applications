import React from 'react';

function Confirmation(props) {
    const {orderInfo} = props;
    
    return (
        <div>
            <h3>Thank You For Your Order!</h3>
            <h4>Your Confirmation</h4>
            <h5>Name: {orderInfo.name}</h5>
            <p>Email: {orderInfo.email}</p>
            <p>Size: {orderInfo.size}</p>
            <div>Toppings: {orderInfo.toppings.map((want, index) => <p key = {index} >{want}</p>)}</div>
            <p>Special Instructions: {orderInfo.specInstruc}</p>
        </div>

    )

};

export default Confirmation;